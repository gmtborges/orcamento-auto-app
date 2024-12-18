// Package ui handles the PocketBase Superuser frontend embedding.
package ui

import (
	"embed"
	"io/fs"
)

//go:embed all:build/client
var distDir embed.FS

// DistDirFS contains the embedded build/client directory files (without the "build/client" prefix)
var DistDirFS, _ = fs.Sub(distDir, "build/client")
