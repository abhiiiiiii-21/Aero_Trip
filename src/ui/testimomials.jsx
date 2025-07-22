"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto max-w-xs sm:max-w-lg md:max-w-4xl px-2 sm:px-4 py-10 sm:py-16 md:py-20 font-sans antialiased">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-stretch min-h-[28rem] md:min-h-[22rem]">
        <div>
          <div className="relative h-56 sm:h-72 md:h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-2xl sm:rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4 px-2 sm:px-4 h-full">
          <div className="flex-1 flex flex-col justify-between">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black">
                {testimonials[active].name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {testimonials[active].designation}
              </p>
              <motion.p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg text-gray-500">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </div>
          <div className="flex gap-3 sm:gap-4 pt-8 sm:pt-10 md:pt-0 mt-auto">
            <button
              onClick={handlePrev}
              className="group/button flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gray-100 dark:bg-[#0696D8]"
            >
              <IconArrowLeft
                className="h-6 w-6 sm:h-7 sm:w-7 text-[#0696D8] transition-transform duration-300 group-hover/button:rotate-12 dark:text-white"
              />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gray-100 dark:dark:bg-[#0696D8]"
            >
              <IconArrowRight
                className="h-6 w-6 sm:h-7 sm:w-7 text-[#0696D8] transition-transform duration-300 group-hover/button:-rotate-12 dark:text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
