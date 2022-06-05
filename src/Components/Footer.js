import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        class="fixed bottom-0 w-full h-24"
        style={{
          background: "linear-gradient(90deg, #FFFFFF 0%, #E8D3B9 100%)",
        }}
      >
        <div class="py-4 px-8 mx-auto shadow-lg tracking-wider text-center">
          <p class="uppercase font-bold">Made using React.js</p>
          <p class="text-sm">by Daffa Ananda Pratama Resyaly</p>
        </div>
      </div>
    );
  }
}

export default Footer;
