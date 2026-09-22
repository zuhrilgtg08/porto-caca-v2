'use client'

import { FaPallet, FaLaptop, FaPaintBrush } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          Mahasiswi aktif Universitas Negeri Surabaya yang gemar menggambar dan
          mengembangkan kemampuan ilustrasi digital, terbiasa mengolah ide
          menjadi elemen visual yang siap digunakan untuk berbagai kebutuhan,
          serta menyelesaikan ilustrasi dengan rapi dan siap beradaptasi dengan
          target kerja yang ditetapkan.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaPallet className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Asset & Element Creation
            </h3>
            <ul className="text-secondary space-y-2">
              <li>
                Membuat elemen visual seperti background, properti, dan dekorasi
                yang siap digunakan sebagai aset dalam proyek animasi atau
                desain.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptop className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Character Design (Dasar)
            </h3>
            <ul className="text-secondary space-y-2">
              <li>
                Membuat desain karakter sederhana berdasarkan konsep, termasuk
                bentuk, ekspresi, dan elemen visual pendukung.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaPaintBrush className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital Illustration</h3>
            <ul className="text-secondary space-y-2">
              <li>
                Mampu membuat ilustrasi digital dari tahap sketsa hingga final
                dengan memperhatikan detail, warna, dan komposisi.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Himpunan Mahasiswa Program Studi (HMP)
            </h3>
            <p className="text-primary mb-2">Company Name • 2020 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Menjabat sebagai Sekretaris Departemen Bidang Penalaran Akademik
                dengan keterlibatan aktif dalam persiapan hingga pelaksanaan
                kegiatan
              </li>
              {/* <li>
                Implemented CI/CD pipelines reducing deployment time by 50%
              </li> */}
              {/* <li>Mentored junior developers and conducted code reviews</li> */}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Koordinator Konsumsi – LKMMTD & Studi Banding
            </h3>
            <p className="text-primary mb-2">Previous Company • 2018 - 2020</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Bertanggung jawab mengelola dan mendistribusikan konsumsi
                peserta serta panitia, serta terlibat langsung di lapangan untuk
                memastikan kebutuhan terpenuhi tepat waktu
              </li>
              {/* <li>
                Built responsive user interfaces with modern JavaScript
                frameworks
              </li> */}
              {/* <li>Optimized database queries improving performance by 40%</li> */}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Sponsorship - SENGKUNI 7 UNESA
            </h3>
            <p className="text-primary mb-2">Previous Company • 2018 - 2020</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Bertugas menjaga stan sponsor dan melayani pengunjung, serta
                memastikan perlengkapan dan kebutuhan stan selalu siap selama
                acara berlangsung.
              </li>
              {/* <li>
                Built responsive user interfaces with modern JavaScript
                frameworks
              </li> */}
              {/* <li>Optimized database queries improving performance by 40%</li> */}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              S1 - Pendidikan Seni Rupa
            </h3>
            <p className="text-primary mb-2">
              Universitas Negeri Surabaya • 2024 - 2028
            </p>
            <p className="text-secondary">
              Currently pursuing a Bachelor&apos;s degree in Fine Arts
              Education, focusing on developing artistic skills and pedagogical
              knowledge to educate future artists.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
} 