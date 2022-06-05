// import logo from './logo.svg';
// import axios from 'axios';
import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

(function () {
  var days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  Date.prototype.getDayName = function () {
    return days[this.getDay()];
  };
})();

class App extends Component {
  state = {
    // No file initially
    selectedFile: null,
    now: null,
  };

  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // onFileUpload = () => {
  //   this.show = true;
  //   console.log(this.state.selectedFile);
  // };

  newFile = () => {
    if (this.state.selectedFile) {
      const now = new Date();
      const today = now.getDayName();
      return (
        <div class="text-center font-bold">
          <p>
            {today}-{Date.now()}
          </p>
        </div>
      );
    } else {
      <div>
        <br />
        <h4>Please upload a file first!</h4>
      </div>;
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div
          class="h-96"
          style={{
            background: "linear-gradient(90deg, #CC9999 0%, #C2B280 100%)",
          }}
        >
          <h1 class="py-10 tracking-wider text-3xl text-center font-bold">
            Upload your File!
          </h1>
          <div class="py-18 text-center">
            <input
              type="file"
              class="mb-8 text-sm text-center
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
              onChange={this.onFileChange}
            />
            <br />
          </div>
          {this.newFile()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

/*
<br />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={this.onFileUpload}
            >
              Upload!
            </button>*/

/*
<button
              type="button"
              class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500"
              disabled
            >
              <svg
                class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </button>
            */
