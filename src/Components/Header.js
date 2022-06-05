import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        class="py-20 shadow-lg"
        style={{
          background: "linear-gradient(90deg, #87CEEB 0%, #0000FF 100%)",
        }}
      >
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-2 text-white text-center">
            Welcome!
          </h2>
          <h3 class="text-2xl mb-8 text-gray-200 text-center">
            Website for File Name Changer
          </h3>
        </div>
      </div>
    );
  }
}
export default Header;
