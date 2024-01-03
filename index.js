const template = document.createElement('template');
template.innerHTML = `
  <style>
    *,
    :after,
    :before {
      box-sizing: border-box;
    }
    body {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.9rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.2rem;
    }
    .display-none {
      display: none;
    }
    .hidden {
      visibility: hidden;
    }
    .display-block {
      display: block;
    }
    section {
      display: block;
    }
    .dss-chat-floatButton {
      box-sizing: border-box;
    }
    .chat-icon-group {
      bottom: 1.5rem;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      position: fixed;
      right: 1.5rem;
    }
    .semi-transparent-button {
      background: #c31533;
      border-radius: 100%;
      color: #fff;
      height: 4rem;
      right: 1.5rem;
      width: 4rem !important;
    }
    .cursor-pointer {
      cursor: pointer;
    }
    .text-center {
      text-align: center !important;
    }
    .shadow {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
    h5 {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.2rem;
    }
    svg {
      overflow: hidden;
      vertical-align: middle;
    }
    .svg-icon {
      width: 4em;
      height: 4em;
      vertical-align: middle;
      fill: currentColor;
      overflow: hidden;
      padding-top: 0.7em;
    }
    
    svg:not(:root) {
      overflow-clip-margin: content-box;
      overflow: hidden;
    }
    .mt-3 {
      margin-top: 1rem !important;
    }
    .w-100 {
      width: 100% !important;
    }
    .h-100 {
      height: 100% !important;
    }
    .border {
      border: 1px solid #dee2e6 !important;
    }
    .modal-container-chat {
      background-color: #fff;
      right: 0.25rem;
      width: 450px;
      /* height: 650px; */
      /* max-height: 40%; */
    }
    .cursor-pointer {
      cursor: pointer;
    }
    .text-center {
      text-align: center !important;
    }
    .shadow {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
    .modal-section {
      height: 75%;
    }
    .border1 {
      border: 1px solid red;
    }
    .position-fixed {
      position: fixed;
    }
    .modal-section-chat {
      bottom: 0;
      height: 90%;
    }
  </style>
  <section>
    <div class="dss-chat-floatButton">
      <span class="chat-icon-group button-section">
        <span
          name="svgImg1"
          value="svgImg1"
          data-component-id="DssChatBotButton"
          class="
            semi-transparent-button
            text-center
            cursor-pointer
            shadow
            fab-icon
          "
        >
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            class="svg-icon"
            style="
              width: 4em;
              height: 4em;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
              padding-top: 0.7em;
            "
          >
            <path
              d="M881.777778 369.777778H483.555556c-48.355556 0-85.333333 36.977778-85.333334 85.333333v227.555556c0 45.511111 36.977778 85.333333 85.333334 85.333333h284.444444l113.777778 113.777778v-113.777778c48.355556 0 85.333333-39.822222 85.333333-85.333333v-227.555556c0-48.355556-36.977778-85.333333-85.333333-85.333333z"
              fill=""
            ></path>
            <path
              d="M540.444444 170.666667H142.222222C93.866667 170.666667 56.888889 207.644444 56.888889 256v227.555556c0 45.511111 36.977778 85.333333 85.333333 85.333333v113.777778l113.777778-113.777778h85.333333v-113.777778c0-79.644444 62.577778-142.222222 142.222223-142.222222h142.222222V256c0-48.355556-36.977778-85.333333-85.333334-85.333333z"
              fill=""
            ></path>
          </svg>
        </span>
        <h5 class="mb-3">Live Chat</h5>
        <span
          name="svgImg1"
          value="svgImg1"
          data-component-id="DssChatBotButton"
          class="
            semi-transparent-button
            text-center
            cursor-pointer
            shadow
            fab-icon
          "
        >
          <svg
            viewBox="0 0 20.517 20.517"
            id="forum-24px"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            class="mt-3"
          >
            <path
              id="Path_587"
              data-name="Path 587"
              d="M0,0H20.517V20.517H0Z"
              fill="none"
            ></path>
            <path
              _ngcontent-woe-c171=""
              id="Path_588"
              data-name="Path 588"
              d="M18.243,5.42h-1.71v7.694H5.42v1.71a.857.857,0,0,0,.855.855h9.4L19.1,19.1V6.274A.857.857,0,0,0,18.243,5.42Zm-3.42,5.129V2.855A.857.857,0,0,0,13.968,2H2.855A.857.857,0,0,0,2,2.855V14.823L5.42,11.4h8.549A.857.857,0,0,0,14.823,10.549Z"
              transform="translate(-0.29 -0.29)"
              fill="#fff"
            ></path>
          </svg>
        </span>
        <h5 class="mb-3">Chat Bot</h5>
      </span>
      <div
          id="modal-container-chat"
          class="
            modal-container-chat
            shadow-lg
            position-fixed
            modal-section-chat
            hidden
          "
        >
          <iframe
            id="chat-iframe"
            class="w-100 h-100 border"
            src="http://localhost:8080/app/chat?orgId=globalorg-us&liveChat=true"
            title="description"
          ></iframe>
        </div>      
    </div>
  </section>
`;

class DssChatApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isChatEngaged = false;
    this.handleChatAppClose = this.handleChatAppClose.bind(this);
    this.liveChatIframe = 0;
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    window.addEventListener('message', this.handleChatAppClose);

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const liveChatBtn = document
      .querySelector('dss-chat-app')
      .shadowRoot.querySelector('.chat-icon-group.button-section');

    const liveChatIframe = document
      .querySelector('dss-chat-app')
      .shadowRoot.querySelector('.modal-container-chat');

    if (!liveChatBtn) return;

    liveChatBtn.addEventListener('click', function (event) {
      this.isChatEngaged = !this.isChatEngaged;
      liveChatIframe.classList.remove('hidden');
      console.log('this.isChatEngaged ', this.isChatEngaged);
    });

    this.liveChatIframe = liveChatIframe;
  }

  handleChatAppClose(e) {
    // console.log('event ', e.data);
    // TODO dynamic import for url? hardcode? 
    if (e.origin !== 'http://localhost:8080') return;
    if(typeof e.data.showPopup === "boolean"){
      this.liveChatIframe.classList.add('hidden');
      this.isChatEngaged = e.data.showPopup;
    }
    
  }
}

customElements.define('dss-chat-app', DssChatApp);

