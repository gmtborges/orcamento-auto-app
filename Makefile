.PHONY: server frontend

server:
	@bun run dev

frontend:
	@cd frontend && bun run dev

dev:
	@make -j 2  server frontend
