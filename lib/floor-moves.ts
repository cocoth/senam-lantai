export type FloorMove = {
  slug: "roll-depan" | "roll-belakang" | "meroda" | "tiger-jump" | "handstand"
  title: string
  level: string
  shortBenefit: string
  description: string
  tutorialGoal: string
  step: Record<number, string>
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
    step: {
      1: "Berdiri tegak dengan kedua kaki rapat, pandangan lurus ke depan, dan tangan di samping badan",
      2: "Tekuk kedua lutut hingga posisi setengah jongkok. Rentangkan kedua tangan lurus ke depan untuk menjaga keseimbangan sebelum menyentuh matras.",
      3: "Letakkan kedua telapak tangan di atas matras dengan jarak selebar bahu. Anggul diangkat sedikit dan dagu ditarik ke arah dada (menempel di dada).",
      4: "Tekuk kedua siku dan arahkan badan ke depan. Pastikan bagian badan yang menyentuh matras pertama kali adalah tengkuk (bukan ubun-ubun kepala).",
      5: "Saat punggung menyentuh matras, lipat kedua lutut sedekat mungkin ke dada. Pegang tulang kering untuk menjaga agar badan tetap membulat.",
      6: "Gunakan momentum dorongan ke depan untuk membawa berat badan kembali ke arah kaki sambil tetap mempertahankan posisi tangan yang memeluk lutut.",
      7: "Dari posisi mengguling, mendaratlah dengan kedua kaki secara bersamaan dalam posisi jongkok, tangan masih menjulur ke depan untuk keseimbangan.",
      8: "Lanjutkan gerakan dengan berdiri tegak sempurna seperti posisi awal, tangan di samping badan, dan pandangan fokus ke depan."
    }
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
    step: {
      1: "Berdiri tegak dengan posisi tubuh rileks, pandangan lurus ke depan, dan lengan di samping badan.",
      2: "Bungkukkan badan ke depan, luruskan lengan ke bawah (sejajar dengan kaki) untuk menjaga keseimbangan sebelum mulai turun",
      3: "Tekuk lutut sedikit dan letakkan kedua telapak tangan di lantai sebagai tumpuan awal.",
      4: "Rendahkan pinggul hingga mendekati lantai (posisi jongkok penuh) dengan tangan tetap terjulur ke depan untuk menjaga momentum.",
      5: "Dorong badan ke belakang. Saat punggung mulai menyentuh lantai, angkat kaki ke atas secara bersamaan.",
      6: "Saat tubuh berguling ke belakang, segera tekuk siku dan letakkan telapak tangan di samping telinga menghadap ke atas (siap untuk menumpu/mendorong lantai).",
      7: "Ayunkan kaki melewati kepala. Gunakan kekuatan tangan untuk mendorong lantai agar leher tidak tertekan dan tubuh bisa melewati posisi terbalik dengan mulus.",
      8: "Mendaratlah dengan kedua kaki terlebih dahulu dalam posisi jongkok, dengan tangan menyentuh lantai di depan untuk menjaga keseimbangan agar tidak terjatuh ke belakang."
    }
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
    step: {
      1: "Berdirilah tegak dengan pandangan lurus ke depan.",
      2: "Tekuk badan ke samping dan letakkan tangan di matras.",
      3: "Dorong dengan tangan untuk mengangkat tubuh ke samping.",
      4: "Gerakkan kaki secara bergantian mengikuti arah tangan.",
      5: "Jaga tubuh tetap lurus dan seimbang selama gerakan.",
      6: "Lanjutkan meroda dengan ritme yang konsisten.",
      7: "Setelah beberapa putaran, gunakan momentum untuk kembali ke posisi berdiri.",
      8: "Selesaikan gerakan dengan posisi berdiri tegak."
    }
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
    step: {
      1: "Berdiri tegak, pandangan fokus ke depan",
      2: "Kemudian angkat kedua tangan lurus ke atas untuk bersiap mengambil momentum.",
      3: "Lakukan lari awalan dengan kecepatan yang terkontrol.",
      4: "bersiaplah untuk melakukan tolakan dengan kedua kaki sambil mengayunkan tangan ke depan atas.",
      5: "Tolakkan kaki sekuat mungkin sehingga tubuh melayang di udara. Posisi tubuh harus lurus dan tangan terjulur ke depan seperti harimau yang menerkam.",
      6: "Saat akan mendarat, letakkan kedua telapak tangan di matras secara kuat untuk menahan berat badan dan menjaga keseimbangan.",
      7: "Segera tekuk siku dan masukkan kepala di antara kedua lengan (dagu menempel ke dada). Mendaratlah dengan tengkuk terlebih dahulu untuk memulai gulingan.",
      8: "Setelah berguling, pegang bagian tulang kering atau julurkan tangan ke depan untuk menjaga keseimbangan dalam posisi jongkok, lalu kembali berdiri tegak",
      9: "Untuk latihan bertahap, mulai dengan tolakan rendah dan fokus pada teknik pendaratan sebelum meningkatkan ketinggian lompatan."
    }
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
    step: {
      1: "Berdiri tegak, pandangan fokus ke depan. Angkat kedua tangan lurus ke atas untuk bersiap mengambil momentum.",
      2: "Langkahkan kaki kanan (atau kaki tumpuan) sedikit ke depan. Posisi tubuh mulai condong ke depan.",
      3: "Letakkan telapak tangan di lantai di depan kaki tumpuan. Lengan harus lurus.",
      4: "Ayunkan kaki kiri (kaki yang tidak tumpuan) ke atas. Pertahankan kaki kanan di lantai sebagai tumpuan awal.",
      5: "Gunakan momentum ayunan kaki kiri untuk mengangkat kaki kanan ke atas. Kedua kaki harus lurus di udara.Pertahankan posisi tubuh yang lurus dan seimbang di udara. Kekuatan otot perut, punggung, lengan, dan bahu sangat penting di sini.Pandangan harus terus tertuju pada lantai di antara kedua tangan.",
      6: "Jatuhkan badan dengan melakukan roll belakang dengan tengkuk sebagai tumpuan pendaratan.",
      7: "Lanjutkan dengan posisi jongkok, tangan tetap menjulur ke depan untuk menjaga keseimbangan.",
      8: "Kembali berdiri tegak dengan posisi tangan di samping badan dan pandangan fokus ke depan."
    }
  },
]

export const floorMoveMap = Object.fromEntries(
  floorMoves.map((move) => [move.slug, move])
) as Record<FloorMove["slug"], FloorMove>
