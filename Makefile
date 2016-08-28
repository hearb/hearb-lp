.PHONY: more \
	server server/test server/build server/deps \
	client/build client/watch client/deps

# http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
more:
	@awk 'BEGIN {FS = ":.*?## "} /^[\$$\(\)\/a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

server:                                           ## サーバを起動
	go run hearb-lp.go

server/test:                                      ## サーバをテスト
	go test -v ./...

server/build:                                     ## サーバをビルド
	go build -o hearb-lp hearb-lp.go

server/deps:                                      ## サーバの依存パッケージをダウンロード
	go get -d -t -v ./...

client/build:                                     ## クライアントをビルド
	NODE_ENV=production ./node_modules/.bin/webpack

client/watch:                                     ## クライアントを自動コンパイル
	NODE_ENV=development ./node_modules/.bin/webpack --watch

client/deps:                                      ## クライアントの依存パッケージをダウンロード
	npm install
	./node_modules/.bin/typings install
