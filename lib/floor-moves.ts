export type FloorMove = {
  slug: "roll-depan" | "roll-belakang" | "meroda" | "tiger-jump" | "handstand"
  title: string
  level: string
  shortBenefit: string
  description: string
  tutorialGoal: string
}

export const floorMoves: FloorMove[] = [
  {
    slug: "roll-depan",
    title: "Roll Depan",
    level: "Pemula",
    shortBenefit:
      "Melatih keberanian, koordinasi, dan kontrol tubuh saat berguling ke depan.",
    description:
      "Roll depan adalah gerakan dasar senam lantai yang melatih pola berguling aman dari tengkuk ke punggung. Fokus utama berada pada posisi dagu menempel dada, dorongan kaki yang cukup, dan pendaratan stabil.",
    tutorialGoal:
      "Mampu melakukan satu putaran roll depan dengan transisi halus dari jongkok ke berdiri.",
  },
  {
    slug: "roll-belakang",
    title: "Roll Belakang",
    level: "Pemula - Menengah",
    shortBenefit:
      "Menguatkan otot inti dan meningkatkan orientasi tubuh saat bergerak mundur.",
    description:
      "Roll belakang melatih kontrol arah gerak mundur serta kekuatan dorong dari tangan. Kunci tekniknya adalah menekuk lutut rapat, menjaga dagu tetap masuk, dan menempatkan telapak tangan dekat telinga saat mendorong.",
    tutorialGoal:
      "Mampu melakukan roll belakang dari posisi jongkok tanpa kehilangan keseimbangan saat akhir gerakan.",
  },
  {
    slug: "meroda",
    title: "Meroda",
    level: "Menengah",
    shortBenefit:
      "Membangun kelincahan, keseimbangan sisi kanan-kiri, dan ritme gerak.",
    description:
      "Meroda adalah gerakan lateral yang membutuhkan koordinasi tangan-kaki secara bergantian. Gerakan ini membantu pembentukan kontrol tubuh di bidang samping serta kesiapan untuk transisi ke gerakan lanjutan.",
    tutorialGoal:
      "Mampu menempatkan tangan dan kaki secara berurutan dengan garis gerak yang rapi.",
  },
  {
    slug: "tiger-jump",
    title: "Tiger Jump",
    level: "Menengah - Lanjut",
    shortBenefit:
      "Mengasah power lompatan, koordinasi tangan-kaki, dan pendaratan yang aman.",
    description:
      "Tiger jump melibatkan tolakan kaki kuat menuju fase melayang sebelum kontak tangan ke matras. Untuk pemula, latihan dilakukan bertahap dari tolakan rendah agar teknik pendaratan tetap aman dan presisi.",
    tutorialGoal:
      "Mampu melakukan tolakan, fase melayang, dan pendaratan terkontrol dalam satu rangkaian.",
  },
  {
    slug: "handstand",
    title: "Handstand",
    level: "Lanjut",
    shortBenefit:
      "Meningkatkan kekuatan bahu, core stability, dan kontrol keseimbangan statis.",
    description:
      "Handstand adalah gerakan menahan tubuh terbalik dengan kedua tangan sebagai tumpuan. Fokus latihan berada pada aktivasi bahu, penguncian core, dan kontrol titik berat agar tubuh tetap lurus.",
    tutorialGoal:
      "Mampu menahan posisi handstand stabil beberapa detik dengan postur lurus.",
  },
]

export const floorMoveMap = Object.fromEntries(
  floorMoves.map((move) => [move.slug, move])
) as Record<FloorMove["slug"], FloorMove>
