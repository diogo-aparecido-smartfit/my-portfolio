package main

import (
	"api/pkg/db"
	"api/pkg/handler"
	repository "api/pkg/repository/project"
	service "api/pkg/service/project"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func ErrorHandler(f func(*gin.Context) error) gin.HandlerFunc {
	return func(c *gin.Context) {
		if err := f(c); err != nil {
			// Log ou tratamento de erro adicional pode ser feito aqui, se necessário
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
	}
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	_, err = db.Connect()
	if err != nil {
		log.Fatalf("Error connecting to database: %v", err)
	}

	r := gin.Default()
	projectRepo := repository.NewProjectRepository(db.DB)
	projectService := service.NewProjectService(projectRepo)
	projectHandler := handler.NewProjectHandler(projectService)

	r.GET("/projects", ErrorHandler(projectHandler.GetAll))
	r.POST("/projects", ErrorHandler(projectHandler.Create))
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	_ = r.Run(":8080").Error()
}
