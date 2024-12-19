APP_NAME := orcamento-auto

dev:
	@make -j 2 frontend backend

backend:
	@go run . serve

frontend:
	@cd ui && npm run dev

build:
	@cd ui && npm run build; cd -
	GOOS=linux GOARCH=amd64 go build -o bin/$(APP_NAME) .
