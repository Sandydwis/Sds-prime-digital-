'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center">
      
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-400 text-lg mb-6"
          >
            Premium Digital Services
          </motion.p>


          <h1 className="
            text-white 
            font-extrabold 
            tracking-tight
            text-5xl 
            md:text-7xl 
            lg:text-8xl
            leading-tight
          ">
            SDS PRIME
            <br />
            DIGITAL
          </h1>


          <p className="
            mt-8
            text-gray-300
            text-xl
            md:text-2xl
            max-w-3xl
          ">
            Premium Apps For Your Digital Lifestyle
          </p>


          <p className="
            mt-4
            text-gray-400
            text-lg
          ">
            Streaming • AI • Editing • Productivity
          </p>


          <div className="mt-10 flex gap-5 flex-wrap">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/62895320797199"
              className="
                px-8
                py-4
                rounded-xl
                bg-blue-500
                text-white
                font-semibold
                shadow-lg
                shadow-blue-500/30
              "
            >
              Order Sekarang
            </motion.a>


            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#produk"
              className="
                px-8
                py-4
                rounded-xl
                border
                border-white/20
                text-white
                backdrop-blur
              "
            >
              Lihat Produk
            </motion.a>

          </div>


          {/* floating card */}
          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.8}}
            className="
              mt-20
              inline-flex
              items-center
              gap-4
              px-6
              py-4
              rounded-2xl
              bg-white/5
              border
              border-white/10
              backdrop-blur
            "
          >
            <span className="text-green-400 text-2xl">
              ●
            </span>

            <div>
              <p className="text-white font-semibold">
                Fast & Trusted Service
              </p>
              <p className="text-gray-400 text-sm">
                Premium digital account provider
              </p>
            </div>

          </motion.div>


        </motion.div>

      </div>

    </section>
  );
}