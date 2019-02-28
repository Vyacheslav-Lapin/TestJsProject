.DEFAULT_GOAL := run

run:
	babel src --out-dir dist --source-maps inline
	http-server

build: run
	#jnsjkdsf
	
