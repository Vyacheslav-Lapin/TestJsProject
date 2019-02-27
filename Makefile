.DEFAULT_GOAL := run

run:
	babel src --out-dir dist
	http-server

build: run
	#jnsjkdsf
	
