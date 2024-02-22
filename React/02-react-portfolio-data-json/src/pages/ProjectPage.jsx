import CardBody from "../components/Card/CardBody";
import CardImage from "../components/Card/CardImage";
import Cards from "../components/Card/Cards";

import { Link } from "react-router-dom";
import jsHead from "../assets/img/js.heading.png";
import reactHead from "../assets/img/react.heading.png";

import domProject1 from "../assets/project/03-js-dom/js-dom1.png";
import domProject2 from "../assets/project/03-js-dom/js-dom2.png";
import domProject3 from "../assets/project/03-js-dom/js-dom3.png";
import domProject4 from "../assets/project/03-js-dom/js-dom4.png";
import domProject5 from "../assets/project/03-js-dom/js-dom5.png";
import domProject6 from "../assets/project/03-js-dom/js-dom6.png";
import domProject7 from "../assets/project/03-js-dom/js-dom7.png";
import domProject9 from "../assets/project/03-js-dom/js-dom9.png";
// REACT
import reactProject1 from "../assets/project/04-react/react1.png";
import reactProject2 from "../assets/project/04-react/react2.png";
import reactProject3 from "../assets/project/04-react/react3.png";
import CardButton from "../components/Card/CardButton";

const ProjectPage = () => {
  // const { dynamic } = useParams();
  // console.log(parms);
  return (
    <>
      <div className="  mx-auto ">
        <div className="p-4 ml-4 flex items-center space-x-5">
          <img src={jsHead} alt="js-logo" className=" w-12 h-12" />
          <h1 className="  text-xl font-semibold underline">
            JavaScript DOM Projects
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-6 ">
          {/* Row 1 */}
          {/* 01-form-validation */}
          <div className="mx-auto my-2">
            <Cards type={"normal"}>
              <Link
                to={
                  "https://esakki2104prsnl.github.io/cyberdude-challenges/Javascript/02-javascript-dom/01-form-validation/dist/"
                }
                target="_blank"
              >
                <CardImage link={domProject1} />
                <CardBody
                  title={"Form data's Validation"}
                  desc={
                    "Using JavaScript DOM and Form Valitation using just-validate plugin we are validating our website."
                  }
                />
              </Link>
              <div className="px-5 pb-2">
                <Link
                  target="_blank"
                  to={
                    "https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/Javascript/02-javascript-dom/01-form-validation"
                  }
                >
                  <CardButton
                    type={"submit"}
                    label={"Git-Repo"}
                    colorExtraClassName={"bg-purple-300 hover:bg-purple-400"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></path>
                        <path
                          strokeLinejoin="round"
                          d="M15 17v5l2.5-1.6L20 22v-5"
                        ></path>
                        <path d="M6 17h14"></path>
                        <path
                          strokeLinejoin="round"
                          d="M6 17a2 2 0 1 0 0 4h5.5"
                        ></path>
                      </g>
                    </svg>
                  </CardButton>
                </Link>
              </div>
            </Cards>
          </div>

          {/* 02-form-localstorage */}
          <div className="mx-auto my-2">
            <Cards type={"normal"}>
              <Link
                to={
                  "https://esakki2104prsnl.github.io/cyberdude-challenges/Javascript/02-javascript-dom/02-form-localstorage/dist/"
                }
                target="_blank"
              >
                <CardImage link={domProject2} />
                <CardBody
                  title={"Form data's saved in LocalStorage"}
                  desc={
                    "Using JavaScript DOM we collect the user data's and saved in broweser LocalStorage.  "
                  }
                />
              </Link>
              <div className="px-5 pb-2">
                <Link
                  target="_blank"
                  to={
                    "https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/Javascript/02-javascript-dom/02-form-localstorage"
                  }
                >
                  <CardButton
                    type={"submit"}
                    label={"Git-Repo"}
                    colorExtraClassName={"bg-purple-300 hover:bg-purple-400"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></path>
                        <path
                          strokeLinejoin="round"
                          d="M15 17v5l2.5-1.6L20 22v-5"
                        ></path>
                        <path d="M6 17h14"></path>
                        <path
                          strokeLinejoin="round"
                          d="M6 17a2 2 0 1 0 0 4h5.5"
                        ></path>
                      </g>
                    </svg>
                  </CardButton>
                </Link>
              </div>
            </Cards>
          </div>

          {/* 03-local-json-data-into-ui */}
          <div className="mx-auto my-2">
            <Cards type={"normal"}>
              <Link
                to={
                  "https://esakki2104prsnl.github.io/cyberdude-challenges/Javascript/03-json-data-ui-display/dist/"
                }
                target="_blank"
              >
                <CardImage link={domProject3} />
                <CardBody
                  title={"Local JSON data showed in UI"}
                  desc={
                    "Using data.json file the object are looped and showed in UserInterface."
                  }
                />
              </Link>
              <div className="px-5 pb-2">
                <Link
                  target="_blank"
                  to={
                    "https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/Javascript/02-javascript-dom/03-json-data-ui-display"
                  }
                >
                  <CardButton
                    type={"submit"}
                    label={"Git-Repo"}
                    colorExtraClassName={"bg-purple-300 hover:bg-purple-400"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></path>
                        <path
                          strokeLinejoin="round"
                          d="M15 17v5l2.5-1.6L20 22v-5"
                        ></path>
                        <path d="M6 17h14"></path>
                        <path
                          strokeLinejoin="round"
                          d="M6 17a2 2 0 1 0 0 4h5.5"
                        ></path>
                      </g>
                    </svg>
                  </CardButton>
                </Link>
              </div>
            </Cards>
          </div>

          {/* Row 2 */}
          {/* 04-get-my-ip */}
          <div className="mx-auto my-2">
            <Cards type={"normal"}>
              <Link
                to={
                  "https://esakki2104prsnl.github.io/cyberdude-challenges/Javascript/02-javascript-dom/04-get-my-ip/dist/"
                }
                target="_blank"
              >
                <CardImage link={domProject4} />
                <CardBody
                  title={"Get my IP Address using API"}
                  desc={
                    "To get your IP Address using this link, here I used basic XMLHttp Request method. "
                  }
                />
              </Link>
              <div className="px-5 pb-2">
                <Link
                  target="_blank"
                  to={
                    "https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/Javascript/02-javascript-dom/04-get-my-ip"
                  }
                >
                  <CardButton
                    type={"submit"}
                    label={"Git-Repo"}
                    colorExtraClassName={"bg-purple-300 hover:bg-purple-400"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></path>
                        <path
                          strokeLinejoin="round"
                          d="M15 17v5l2.5-1.6L20 22v-5"
                        ></path>
                        <path d="M6 17h14"></path>
                        <path
                          strokeLinejoin="round"
                          d="M6 17a2 2 0 1 0 0 4h5.5"
                        ></path>
                      </g>
                    </svg>
                  </CardButton>
                </Link>
              </div>
            </Cards>
          </div>

          {/* 05-youtube-thumbnail */}
          <div className="mx-auto my-2">
            <Cards type={"normal"}>
              <Link
                to={
                  "https://esakki2104prsnl.github.io/cyberdude-challenges/Javascript/02-javascript-dom/05-youtube-thumbnail/dist/"
                }
                target="_blank"
              >
                <CardImage link={domProject5} />
                <CardBody
                  title={"Youtube Thumbnail"}
                  desc={
                    "Here we can see any Youtube videos thumbnail in order to using relevant youtube links."
                  }
                />
              </Link>
              <div className="px-5 pb-2">
                <Link
                  target="_blank"
                  to={
                    "https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/Javascript/02-javascript-dom/05-youtube-thumbnail"
                  }
                >
                  <CardButton
                    type={"submit"}
                    label={"Git-Repo"}
                    colorExtraClassName={"bg-purple-300 hover:bg-purple-400"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></path>
                        <path
                          strokeLinejoin="round"
                          d="M15 17v5l2.5-1.6L20 22v-5"
                        ></path>
                        <path d="M6 17h14"></path>
                        <path
                          strokeLinejoin="round"
                          d="M6 17a2 2 0 1 0 0 4h5.5"
                        ></path>
                      </g>
                    </svg>
                  </CardButton>
                </Link>
              </div>
            </Cards>
          </div>

          {/* 06-github-repo */}
          <div className="mx-auto my-2">
            <Cards type={"normal"}>
              <Link
                to={
                  "https://esakki2104prsnl.github.io/cyberdude-challenges/Javascript/02-javascript-dom/06-github-repo/dist/"
                }
                target="_blank"
              >
                <CardImage link={domProject6} />
                <CardBody
                  title={"Inters Github Profiles Lisiting"}
                  desc={
                    "From this application we are able to collect CyberDude Networks interns profile and repository details."
                  }
                />
              </Link>
              <div className="px-5 pb-2">
                <Link
                  target="_blank"
                  to={
                    "https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/Javascript/02-javascript-dom/06-github-repo"
                  }
                >
                  <CardButton
                    type={"submit"}
                    label={"Git-Repo"}
                    colorExtraClassName={"bg-purple-300 hover:bg-purple-400"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></path>
                        <path
                          strokeLinejoin="round"
                          d="M15 17v5l2.5-1.6L20 22v-5"
                        ></path>
                        <path d="M6 17h14"></path>
                        <path
                          strokeLinejoin="round"
                          d="M6 17a2 2 0 1 0 0 4h5.5"
                        ></path>
                      </g>
                    </svg>
                  </CardButton>
                </Link>
              </div>
            </Cards>
          </div>

          {/* Row 3 */}
          {/* 07-advice-api-in-ui */}
          <div className="mx-auto my-2">
            <Cards type={"normal"}>
              <Link
                to={
                  "https://esakki2104prsnl.github.io/cyberdude-challenges/Javascript/02-javascript-dom/07-advice-api-in-ui/dist/"
                }
                target="_blank"
              >
                <CardImage link={domProject7} />
                <CardBody
                  title={"Boomer advice's"}
                  desc={
                    "This advice comes from an API object format using that API we're able to generate advices."
                  }
                />
              </Link>
              <div className="px-5 pb-2">
                <Link
                  target="_blank"
                  to={
                    "https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/Javascript/02-javascript-dom/07-advice-api-in-ui"
                  }
                >
                  <CardButton
                    type={"submit"}
                    label={"Git-Repo"}
                    colorExtraClassName={"bg-purple-300 hover:bg-purple-400"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></path>
                        <path
                          strokeLinejoin="round"
                          d="M15 17v5l2.5-1.6L20 22v-5"
                        ></path>
                        <path d="M6 17h14"></path>
                        <path
                          strokeLinejoin="round"
                          d="M6 17a2 2 0 1 0 0 4h5.5"
                        ></path>
                      </g>
                    </svg>
                  </CardButton>
                </Link>
              </div>
            </Cards>
          </div>

          {/* 09-syllabus organizer */}
          <div className="mx-auto my-2">
            <Cards type={"normal"}>
              <Link
                to={
                  "https://esakki2104prsnl.github.io/cyberdude-challenges/Javascript/02-javascript-dom/09-syllabus-organiser/dist/"
                }
                target="_blank"
              >
                <CardImage link={domProject9} />
                <CardBody
                  title={"Syllabus-organiser"}
                  desc={
                    "Here we able to create a syllabus in order to calculate the time of particular syllabus"
                  }
                />
              </Link>
              <div className="px-5 pb-2">
                <Link
                  target="_blank"
                  to={
                    "https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/Javascript/02-javascript-dom/09-syllabus-organiser"
                  }
                >
                  <CardButton
                    type={"submit"}
                    label={"Git-Repo"}
                    colorExtraClassName={"bg-purple-300 hover:bg-purple-400"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></path>
                        <path
                          strokeLinejoin="round"
                          d="M15 17v5l2.5-1.6L20 22v-5"
                        ></path>
                        <path d="M6 17h14"></path>
                        <path
                          strokeLinejoin="round"
                          d="M6 17a2 2 0 1 0 0 4h5.5"
                        ></path>
                      </g>
                    </svg>
                  </CardButton>
                </Link>
              </div>
            </Cards>
          </div>
        </div>
      </div>

      <div className=" pb-10 mx-auto ">
        <div className="p-4 ml-4  flex items-center space-x-5">
          <img src={reactHead} alt="js-logo" className="bg-black w-12 h-12" />
          <h1 className=" text-xl font-semibold underline  ">
            React JS Projects
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-6 ">
          {/* row 1 */}
          {/* Portfolio */}
          <div className="mx-auto my-2">
            <Cards type={"normal"}>
              <Link
                to={"https://amazing-biscochitos-f18b7e.netlify.app/"}
                target="_blank"
              >
                <CardImage link={reactProject1} />
                <CardBody
                  title={"Esakki's Portfolio"}
                  desc={
                    "It's react project components based UI. Passing value through Props and form validation using react hooks "
                  }
                />
              </Link>
              <div className="px-5 pb-2">
                <Link
                  target="_blank"
                  to={
                    "https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/React/02-react-portfolio-data-json"
                  }
                >
                  <CardButton
                    type={"submit"}
                    label={"Git-Repo"}
                    colorExtraClassName={"bg-purple-300 hover:bg-purple-400"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></path>
                        <path
                          strokeLinejoin="round"
                          d="M15 17v5l2.5-1.6L20 22v-5"
                        ></path>
                        <path d="M6 17h14"></path>
                        <path
                          strokeLinejoin="round"
                          d="M6 17a2 2 0 1 0 0 4h5.5"
                        ></path>
                      </g>
                    </svg>
                  </CardButton>
                </Link>
              </div>
            </Cards>
          </div>

          {/* Whatsapp Fakechat */}
          <div className="mx-auto my-2">
            <Cards type={"normal"}>
              <Link
                to={
                  "https://65cba873314c751154aed3de--aquamarine-marshmallow-9b38b1.netlify.app/"
                }
                target="_blank"
              >
                <CardImage link={reactProject2} />
                <CardBody
                  title={"Whatsapp Fake chat"}
                  desc={
                    "It's a fake whatsapp chat to kidding your friends & family members"
                  }
                />
              </Link>
              <div className="px-5 pb-2">
                <Link
                  target="_blank"
                  to={
                    "https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/React/03-react-fakechat"
                  }
                >
                  <CardButton
                    type={"submit"}
                    label={"Git-Repo"}
                    colorExtraClassName={"bg-purple-300 hover:bg-purple-400"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></path>
                        <path
                          strokeLinejoin="round"
                          d="M15 17v5l2.5-1.6L20 22v-5"
                        ></path>
                        <path d="M6 17h14"></path>
                        <path
                          strokeLinejoin="round"
                          d="M6 17a2 2 0 1 0 0 4h5.5"
                        ></path>
                      </g>
                    </svg>
                  </CardButton>
                </Link>
              </div>
            </Cards>
          </div>

          {/* React Componenets */}
          <div className="mx-auto my-2">
            <Cards type={"normal"}>
              <Link
                to={
                  "https://65cba873314c751154aed3de--aquamarine-marshmallow-9b38b1.netlify.app/"
                }
                target="_blank"
              >
                <CardImage link={reactProject3} />
                <CardBody
                  title={"React+Bootstrap Components"}
                  desc={
                    "React+Bootstrap based components like accordion, alert & button components & looping throungh json data"
                  }
                />
              </Link>
              <div className="px-5 pb-2">
                <Link
                  target="_blank"
                  to={
                    "https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/React/04-react-bootstrap-alert"
                  }
                >
                  <CardButton
                    type={"submit"}
                    label={"Git-Repo"}
                    colorExtraClassName={"bg-purple-300 hover:bg-purple-400"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      >
                        <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></path>
                        <path
                          strokeLinejoin="round"
                          d="M15 17v5l2.5-1.6L20 22v-5"
                        ></path>
                        <path d="M6 17h14"></path>
                        <path
                          strokeLinejoin="round"
                          d="M6 17a2 2 0 1 0 0 4h5.5"
                        ></path>
                      </g>
                    </svg>
                  </CardButton>
                </Link>
              </div>
            </Cards>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
