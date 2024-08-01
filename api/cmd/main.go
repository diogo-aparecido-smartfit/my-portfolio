package main

import (
	"api/pkg/db"
	"api/pkg/handler"
	"api/pkg/repository"
	"api/pkg/service"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	db.Connect()

	r := gin.Default()
	projectRepo := repository.NewProjectRepository(db.DB)
	projectService := service.NewProjectService(projectRepo)
	projectHandler := handler.NewProjectHandler(projectService)

	r.GET("/projects", projectHandler.GetAll)
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	r.Run(":3001")
}
