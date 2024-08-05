package db

import (
	"api/pkg/config"
	"api/pkg/model"
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func tableExists(db *gorm.DB, tableName string) bool {
	var count int64
	db.Raw("SELECT COUNT(*) FROM information_schema.tables WHERE table_name = ?", tableName).Scan(&count)
	return count > 0
}

func Connect() (*gorm.DB, error) {
	cfg := config.LoadConfig()
	dsn := cfg.DBConn
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})

	if err != nil {
		log.Fatalf("Error connecting to database: %v", err)
	}

	if !tableExists(db, "projects") {
		if err := db.AutoMigrate(&model.Projects{}, &model.Technologies{}, &model.ProjectsTechnologies{}); err != nil {
			return nil, err
		}
	} else {
		fmt.Println("Tables already exist. Skipping AutoMigrate.")
	}

	DB = db
	return db, nil
}
