import styled from "styled-components";
import { Link } from "react-router-dom";

function Signup() {
  const idRegEx = /^[A-Za-z]{1}[A-Za-z0-9_-]{3,11}$/;
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  function linkToLogin() {
    window.location.href = `http://localhost:3000/login`;
  }
  function postForm(username, password, email) {
    fetch("http://15.164.53.160:8080/v1/members/join", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // memberId,
        username,
        password,
        email,
      }),
    }).then((res) => {
      if (res.status === 201) {
        linkToLogin();
      }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // const memberId = event.target[0].value;
    const memberId = event.target[0].value;
    const memberEmail = event.target[1].value;
    const memberPassword = event.target[2].value;
    let Error = [];
    // if (memberId.match(idRegEx) === null) {
    //   Error.push(
    //     `Wrong ID : ${memberId}\nID should Start with caracter and 4~12 length`
    //   );
    // }
    // if (memberPassword.match(passwordRegEx) === null) {
    //   Error.push(
    //     `Wrong password\npassword should have 1 caracter and 1 number and 1 special caracter with 8~16 length`
    //   );
    // }
    if (memberId.match(idRegEx) === null) {
      Error.push(
        `Wrong ID : ${memberId}\nID should Start with caracter and 4~12 length`
      );
    }
    if (memberPassword.match(passwordRegEx) === null) {
      Error.push(
        `Wrong password\npassword should have 1 caracter and 1 number and 1 special caracter with 8~16 length`
      );
    }
    if (Error.length) {
      alert(Error.join("\n\n"));
      // console.log(Error.join("\n"));
    }
    if (!Error.length) {
      alert(
        `congratulation!  ${memberId}\nNow you can Log in to stackoverflow`
      );
      // linkToLogin(); // 아래 작업이 되어야 하지만 일단 post가 안되는 상황이라 로그인 이동만 체크
      postForm(memberId, memberPassword, memberEmail);
    }
  };

  return (
    <Main>
      <div className="content">
        <div className="conten-body">
          <div className="content-left">
            <h1>Join the Stack Overflow community</h1>
            <div className="content-left-texts">
              <div>
                <svg width="26" height="26" class="svg-icon mtn2">
                  <path
                    opacity=".5"
                    d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"
                  ></path>
                  <path d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"></path>
                </svg>
              </div>
              <div>Get unstuck — ask a question</div>
            </div>
            <div className="content-left-texts">
              <div>
                <svg width="26" height="26" class="svg-icon mtn2">
                  <path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"></path>
                  <path
                    opacity=".5"
                    d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
                  ></path>
                </svg>
              </div>
              <div>Unlock new privileges like voting and commenting</div>
            </div>
            <div className="content-left-texts">
              <div>
                <svg width="26" height="26" class="svg-icon mtn2">
                  <path d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"></path>
                  <path
                    opacity=".5"
                    d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
                  ></path>
                </svg>
              </div>
              <div>Save your favorite tags, filters, and jobs</div>
            </div>
            <div className="content-left-texts">
              <div>
                <svg width="26" height="26" class="svg-icon mtn2">
                  <path d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"></path>
                </svg>
              </div>
              <div>Earn reputation and badges</div>
            </div>
            <div className="left-bottom">
              Collaborate and share knowledge with a private group for FREE.
              <br />
              <a>Get Stack Overflow for Teams free for up to 50 users</a>.
            </div>
          </div>
          <div className="content-right">
            <div className="buttons">
              <button className="button-top top-google">
                <svg
                  aria-hidden="true"
                  class="native svg-icon iconGoogle"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
                    fill="#EA4335"
                  ></path>
                </svg>{" "}
                <span className="marginUp">Sign up with Google </span>
              </button>
              <button className="button-top top-github">
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z"
                    fill="white"
                  ></path>
                </svg>{" "}
                <span className="marginUp">Sign up with GitHub </span>
              </button>
              <button className="button-top top-facebook">
                <svg
                  aria-hidden="true"
                  class="svg-icon iconFacebook"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z"
                    fill="white"
                  ></path>
                </svg>{" "}
                <span className="marginUp">Sign up with Facebook</span>
              </button>
            </div>
            <div className="form" onSubmit={handleSubmit}>
              <form>
                <div>
                  <label className="input-text">Display name</label>
                  <div>
                    <input
                      type="text"
                      id="display-name"
                      name="display-name"
                      size="30"
                    />
                  </div>
                </div>
                <div>
                  <label className="input-text">Email</label>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      size="30"
                      maxlength="100"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="input-text">Password</label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      size="30"
                      autocomplete="off"
                    />
                  </div>
                  <p className="password-text">
                    Passwords must contain at least eight characters, including
                    at least 1 letter and 1 number.
                  </p>
                </div>
                <div className="bot-box"></div>
                <div>
                  <div className="underbot">
                    <div>
                      <input className="checkbox" type="checkbox" />
                    </div>
                    <div>
                      <label>
                        Opt-in to receive occasional product updates, user
                        research invitations, company announcements, and
                        digests.
                      </label>
                    </div>
                    <div>
                      <svg
                        aria-hidden="true"
                        class="svg-icon iconHelpSm"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="#6a737b"
                      >
                        <path d="M7 1C3.74 1 1 3.77 1 7c0 3.26 2.77 6 6 6 3.27 0 6-2.73 6-6s-2.73-6-6-6Zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08Zm.73-3.07-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 0 0-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 0 1 7.7 6.07c.15-.1.21-.21.3-.33.18-.2.28-.47.28-.74.01-.67-.53-1.14-1.18-1.14-.9 0-1.18.7-1.18 1.46H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 0 1 1.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="button-sign">Sign up</button>
                </div>
              </form>
              <div className="signup-bottom-text">
                By clicking “Sign up”, you agree to our <a>terms of service</a>,{" "}
                <a>privacy policy</a> and <a>cookie policy</a>
              </div>
            </div>
            <div className="content-right-bottom-text">
              Already have an account? <Link to={`/login`}>Log in</Link>
              <div>
                Are you an employer?{" "}
                <a>
                  Sign up on Talent{" "}
                  <svg
                    aria-hidden="true"
                    class="va-text-bottom sm:d-none svg-icon iconShareSm"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="#1095fa"
                  >
                    <path d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
export const Main = styled.div`
  width: 100vw;
  background-color: #f1f2f3;
  overflow-x: hidden;

  h1 {
    font-weight: 400;
    font-size: 27px;
    line-height: 27px;
  }
  .content {
    padding: 24px;
  }
  .conten-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-left {
    font-size: 15px;
    line-height: 19px;
    text-decoration: none solid rgb(35, 38, 41);
    color: #232629;
    height: 312px;
    width: 421px;
    margin: 0 48px 128px -100px;
    max-width: 421px;
    padding-bottom: 100px;
    padding-right: 150px;
    svg {
      margin-right: 8px;
      fill: #1095fa;
    }
  }
  .content-left-texts {
    font-size: 15px;
    line-height: 19px;
    text-decoration: none solid rgb(35, 38, 41);
    color: #232629;
    height: 24px;
    width: 421px;
    margin: 0 0 24px 0;
    display: flex;
  }
  .left-bottom {
    font-size: 13px;
    color: #6a737c;
  }

  .content-right {
    width: 316px;
  }

  .flex {
    display: flex;
  }
  a {
    color: #0074cc;
    text-decoration: none;
  }
  .marginUp {
    vertical-align: 4px;
  }
  .buttons {
    display: flex;
    flex-direction: column;
  }

  .top-google {
    font-size: 13px;
    line-height: 15px;
    text-decoration: none solid rgb(35, 38, 41);
    background-color: white;
    color: #232629;
    height: 37px;
    width: 316px;
    border: 1px solid #d6d9dc;
    margin: 0px 0 4px 0;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
  }

  .top-github {
    font-size: 13px;
    line-height: 15px;
    text-decoration: none solid rgb(255, 255, 255);
    text-align: center;
    background-color: #2f3337;
    color: #ffffff;
    height: 37px;
    width: 315px;
    border: 1px solid #d6d9dc;
    margin: 4px 0 4px 0;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
  }
  .top-facebook {
    font-size: 13px;
    line-height: 15px;
    text-decoration: none solid rgb(255, 255, 255);
    text-align: center;
    background-color: #385496;
    color: #ffffff;
    height: 37px;
    width: 315px;
    border: 1px solid #ffffff;
    margin: 4px 0 4px 0;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
  }

  .form {
    background-color: #ffffff;
    background-position: 0% 0%;
    color: #232629;
    width: 268px;
    margin: 20px 0 24px 0;
    padding: 24px 24px 24px 24px;
    max-width: 316px;
    display: block;
    border-radius: 8px;
    border: 1px solid #dfe0e1;
  }

  .input-text {
    font-size: 15px;
    font-weight: 600;
    line-height: 19px;
    text-decoration: none solid rgb(12, 13, 14);
    text-align: left;
    word-spacing: 0px;
    height: 19px;
    width: 268px;
    margin: 2px 0 2px 0;
    padding: 0 2px 0 2px;
  }

  .password-text {
    font-size: 12px;
    line-height: 15px;
    text-decoration: none solid rgb(106, 115, 124);
    text-align: left;
    color: #6a737c;
    height: 31px;
    width: 268px;
    margin: 4px 0 4px 0;
    clear: both;
  }

  input {
    font-size: 13px;
    text-decoration: none solid rgb(12, 13, 14);
    color: #0c0d0e;
    height: 28px;
    width: 268px;
    border: 1px solid #babfc4;
    margin: 5px 0 5px 0;
    cursor: text;
  }

  .bot-box {
    background-color: #f1f2f3;
    height: 156px;
    width: 268px;
    border: 1px solid #e3e6e8;
    border-radius: 3px;
    margin: 30px 0 8px 0;
    padding: 8px 0 2px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .botcheck {
    height: 144px;
    width: 164px;
    border: 1px solid #c1c1c1;
  }
  .underbot {
    display: flex;
    justify-content: center;
  }
  .checkbox {
    height: 13px;
    width: 13px;
    margin-right: 5px;
  }

  label {
    font-size: 12px;
    color: #0c0d0e;
  }

  .button-sign {
    width: 268px;
    height: 38px;
    padding: 10.4px;
    margin: 16px 2px 22px 2px;
    background-color: #1095fa;
    color: #ffffff;
    border-radius: 5px;
    border: none;
  }

  .signup-bottom-text {
    font-size: 12px;
    color: #6a737c;
  }

  .content-right-bottom-text {
    font-size: 13px;
    line-height: 13px;
    text-decoration: none solid rgb(35, 38, 41);
    text-align: center;
    color: #232629;
    height: 78px;
    width: 316px;
    margin: 0 0 24px 0;
    padding: 16px 16px 16px 16px;
    max-width: 316px;
    div {
      margin-top: 15px;
    }
  }
`;

export default Signup;
