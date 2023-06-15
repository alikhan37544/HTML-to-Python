from http.server import SimpleHTTPRequestHandler, HTTPServer

class MyRequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = 'index.html'
        return SimpleHTTPRequestHandler.do_GET(self)

def run_server():
    host = "localhost"
    port = 8000

    server = HTTPServer((host, port), MyRequestHandler)
    print(f"Server running on {host}:{port}")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass

    server.server_close()
    print("Server stopped")

if __name__ == "__main__":
    run_server()
