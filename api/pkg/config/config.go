package config

import "os"

type Config struct {
	DBConn string
}

func LoadConfig() *Config {
	return &Config{
		DBConn: os.Getenv("DATABASE_URL"),
	}
}
