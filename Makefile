.DEFAULT_GOAL := run

run:
	babel src --out-dir dist
	cp src/index.html dist/
#	copy src\index.html dist\
	cd dist && http-server

build: run
	#jnsjkdsf
	
