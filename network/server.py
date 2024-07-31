from http.server import BaseHTTPRequestHandler, HTTPServer


class CustomHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()

        if self.path == "/a":
            self.wfile.write(b"<h1>a</h1>")
        elif self.path == "/b":
            self.wfile.write(b"<h1>b</h1>")
        elif self.path == "/c":
            self.wfile.write(b"<h1>c</h1>")
        else:
            self.wfile.write(b"<h1>d</h1>")


def run_server(port=8000):
    server_address = ("", port)
    httpd = HTTPServer(server_address, CustomHTTPRequestHandler)
    print(f"Starting server on port {port}")
    httpd.serve_forever()


if __name__ == "__main__":
    run_server()