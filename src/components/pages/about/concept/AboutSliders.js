import React, { useState, useRef, useEffect } from "react"
import { TimelineLite, TweenLite } from "gsap"

import "../about.scss"

import TextBox from "./TextBox"
import PhotoBox from "./PhotoBox"

let tl = new TimelineLite()

function AboutSliders({ contentRight, startNum }) {
  const [buttons, setButtons] = useState(contentRight)
  const [boxNum, setBoxNum] = useState(0)

  let picBox = useRef(null)
  let textBox = useRef(null)
  let subNavButtons = useRef(null)

  useEffect(() => {
    TweenLite.to([picBox, textBox, subNavButtons], 1, {
      autoAlpha: 1,
      delay: 0.1,
    })
  }, [])

  const animations = () => {
    tl.to([picBox, textBox, subNavButtons], 1, { opacity: 0 })

    if (buttons) {
      tl.to(picBox, 0, { width: "40%" })
        .to(textBox, 0.1, { width: "60%" })
        .fromTo(
          [textBox],
          1,
          { autoAlpha: 0, x: 100 },
          { autoAlpha: 1, x: 0, justifyContent: "flex-end" }
        )
        .fromTo(
          [picBox],
          1,
          { autoAlpha: 0, x: -100 },
          {
            autoAlpha: 1,
            x: 0,
            justifyContent: "flex-end",
          }
        )

      setTimeout(() => {
        setButtons(!buttons)
      }, 1100)
      tl.to(subNavButtons, 1, { autoAlpha: 1 })
    } else {
      tl.to(picBox, 0, { width: "60%" })
        .to(textBox, 0.1, { width: "40%" })
        .fromTo([picBox], 1, { autoAlpha: 0, x: -100 }, { autoAlpha: 1, x: 0 })
        .fromTo([textBox], 1, { autoAlpha: 0, x: 100 }, { autoAlpha: 1, x: 0 })

      setTimeout(() => {
        setButtons(!buttons)
      }, 1100)
      tl.to(subNavButtons, 1, { autoAlpha: 1 })
    }
  }

  const clickButtons = () => {
    setTimeout(() => {
      boxNum < 3 ? setBoxNum(boxNum + 1) : setBoxNum(0)
    }, 1000)
    animations()
  }

  const previousClickButtons = () => {
    setTimeout(() => {
      boxNum > 0 ? setBoxNum(boxNum - 1) : console.log("boob")
    }, 1000)
    animations()
  }
  const startN = startNum
  console.log(startN)
  return (
    <div>
      <div class="concept-page">
        <div class="concept-wrapper">
          <div
            class={buttons ? "concept-container-pic" : "concept-container-text"}
            ref={el => (picBox = el)}
          >
            {buttons ? (
              <PhotoBox id={boxNum} />
            ) : (
              <TextBox id={boxNum} titleAlign={startN} />
            )}
          </div>

          <div
            class={buttons ? "concept-container-text" : "concept-container-pic"}
            ref={el => (textBox = el)}
          >
            {buttons ? (
              <TextBox id={boxNum} titleAlign={startN} />
            ) : (
              <PhotoBox id={boxNum} />
            )}
          </div>
          <div
            class="concept-container-button-box"
            ref={el => (subNavButtons = el)}
          >
            <div
              class={
                buttons
                  ? "concept-container-buttons-left"
                  : "concept-container-buttons-right"
              }
            >
              {boxNum > 0 ? (
                <span>
                  <span class="prev" onClick={previousClickButtons}>
                    Previous
                  </span>
                  <span class="middle"> / </span>
                </span>
              ) : null}

              <span>
                {" "}
                <span class="next" onClick={clickButtons}>
                &nbsp; Next
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSliders
