import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
export const About = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Protecting our <span class="text-green-400 !important">youth</span>',
        'Protecting our <span class="text-green-400 !important">future</span>',
        'Protecting <span class="text-green-400 !important">you</span>',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      onComplete: (self) => {
        setTimeout(() => {
          self.backspace();
        }, 2000);
        self.stop();
      },
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="z-0 h-screen">

        {/* Your text content */}
        <div className="flex flex-col items-center py-20 relative z-100">
          <div className="font-bold text-5xl mt-12">
            AI Risks <span className="font-light">@</span>{" "}
            <span className="text-[#4b2e83]">UW</span>
          </div>
          <div className="mt-8 font-semibold text-3xl">
            <span ref={typedRef}></span>
          </div>
        </div>
      </div>
    </>
  );
};
