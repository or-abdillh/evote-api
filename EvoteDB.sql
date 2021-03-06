-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-62049-db.mysql-62049:10516
-- Waktu pembuatan: 17 Des 2021 pada 16.08
-- Versi server: 8.0.26
-- Versi PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `EvoteDB`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `Accounts`
--

CREATE TABLE `Accounts` (
  `username` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `fullname` varchar(30) NOT NULL,
  `token` varchar(250) DEFAULT (_utf8mb3'undefined'),
  `status_vote` tinyint(1) DEFAULT (0),
  `candidate_id` int DEFAULT NULL,
  `job_id` int NOT NULL,
  `gender` varchar(6) NOT NULL,
  `last_modified` bigint NOT NULL,
  `time_stamp` bigint DEFAULT (0),
  `role` varchar(10) NOT NULL DEFAULT 'general'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `Accounts`
--

INSERT INTO `Accounts` (`username`, `password`, `fullname`, `token`, `status_vote`, `candidate_id`, `job_id`, `gender`, `last_modified`, `time_stamp`, `role`) VALUES
('20302022', '2022', 'Oka Rajeb Abdillah', 'ckm7wcpvtn858i4e0grj3r8se4wrs8u5ol1e09qdbt6cb6wwhttg6oplycdu0vmwc93jzx5mam4qy29gpiww3jrig99m7i4dr37528lsi6foy883g5x7582m4q27dvx9ukzm5vu7k464dgdsb9ba5c89b8cv0s6biutg1j84mlm1l9w33vspdb8g2jfykolceplf046fs6ovtwzkgefxk4ueol8325otl3yir0hurzwcyjmci2wbk7tri1', 0, NULL, 2, 'male', 0, 0, 'master'),
('aulia', 'aulia', 'Aulia Rahmah', 'tnudivomi0enzh2lp3xxznythm7ctljgsbcycmc9tcfscq4tvrhpxcpyvgrbqysgu9r23jpghsk4b85gax3rk7wz6rlh2muoh2qrzrzztrkf31ic0a5vtf47n6xrp48yvtmqv9izau1zi0fcmciucj4lx8lqehimldq3w1i3r0pg8tlsq99xt53bzk2l7wlv91e9bcjk2bb1l9b5yn372ecwbh02wsslidbx1a98ezoyjsfn4vd3gr3t8q', 0, NULL, 2, 'female', 0, 0, 'general'),
('marzuki', 'marzuki', 'Ahmad Marzuki Afif', '0wil1v7rx1v8grogzdph04ezylc2ccd5rfg9sa6coebmbktjep5d6mrmt0wmu1s8zwhuwp85ab5mxe2taelg3r39qffafgz93rk3jr9py9063xmzsg0ohhdph3htqe2hf4co74tabmxxnemzovwhmz8c4embdsd2vhhzcza8bxyvze4isdpotgd1lq9z27rjkyoxedr51pccm63ygnj7tq3cnju091of6z2jfvqsvta9kwhn1zns8u5qx1', 0, NULL, 2, 'male', 0, 0, 'general'),
('mina', 'mina', 'Mina Fitria', 'undefined', 0, NULL, 2, 'male', 1639678531846, 0, 'general'),
('sandhika', 'sandhika', 'Sandhika Galih', 'o8979lbqssj46ncto2i3yq11gcglm8nm02hp7cuwbvpn728vhu93gq2vwnc8lr3b81gimplcj8q1geg9y4dcexmin1ir5ot3w10gpve691fi804o7y5grbhoz8cvjyoxz3zo6rcohss0266uxv4vbj5zl1jghcmg97mwtwiq3rdjscy24cyc8b2yu9a0sixssavcpiri07gblzjkhr0j9kgam1vfzcpeed316rpk75fozyb21oryfmcrfv', 0, NULL, 1, 'male', 0, 0, 'general'),
('tari', 'tari', 'Julia Lestari Syahisti', 'z4cua5tpmzmwbe5q9ceco3zuyl0qopb4e1ce37plk309lxckc1wf1ds57n0duluutdw5lg5n1otu9zyr4hoe6x00ssa56jx87fz5sv44s9orjcwn6s9whkpad0i5cr9e9bev1zh0xvy8fmdloyl4apkr39xwt62ngmebcx0r6u3i5ugcglji3agj4sve598uz4p9icu6m1hoykmvlgal3zwqa9di6dowaxn5yfk4jbu5agjk2w0cwkmusy', 1, 2, 1, 'male', 1639678689594, 1639745957237, 'general');

-- --------------------------------------------------------

--
-- Struktur dari tabel `Candidates`
--

CREATE TABLE `Candidates` (
  `candidate_id` int NOT NULL,
  `chairman_name` varchar(30) NOT NULL,
  `chairman_image` varchar(50) NOT NULL,
  `vice_chairman_name` varchar(30) NOT NULL,
  `vice_chairman_image` varchar(50) NOT NULL,
  `candidate_number` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `Candidates`
--

INSERT INTO `Candidates` (`candidate_id`, `chairman_name`, `chairman_image`, `vice_chairman_name`, `vice_chairman_image`, `candidate_number`) VALUES
(1, 'Fukan bin Fukan', '/male.jpg', 'Fulanah bin Fulah', '/female.jpg', 1),
(2, 'Ihwan wa sahlan', '/male.jpg', 'Fulanah bin Fulah', '/female.jpg', 2),
(3, 'Fulan bin Fulan', '/male.jpg', 'Fulanah bin Fulah', '/female.jpg', 3),
(4, 'Fukan bin Fukan', '/male.jpg', 'Fulanah bin Fulah', '/female.jpg', 4);

-- --------------------------------------------------------

--
-- Struktur dari tabel `Event`
--

CREATE TABLE `Event` (
  `event_start_at` bigint NOT NULL,
  `event_finish_at` bigint NOT NULL,
  `event_title` varchar(250) NOT NULL,
  `passcode` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `Event`
--

INSERT INTO `Event` (`event_start_at`, `event_finish_at`, `event_title`, `passcode`) VALUES
(1639745424531, 1639800000999, 'Pemilihan Ketua dan Wakil Ketua Umum HIMA TI Politeknik Hasnur 2021', 12345678);

-- --------------------------------------------------------

--
-- Struktur dari tabel `Jobs`
--

CREATE TABLE `Jobs` (
  `job_id` int NOT NULL,
  `job_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `Jobs`
--

INSERT INTO `Jobs` (`job_id`, `job_name`) VALUES
(1, 'Dosen'),
(2, 'Mahasiswa');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `Accounts`
--
ALTER TABLE `Accounts`
  ADD PRIMARY KEY (`username`),
  ADD KEY `Profiles_candidate_id_Candidates_candidate_id` (`candidate_id`),
  ADD KEY `Profiles_job_id_Jobs_job_id` (`job_id`);

--
-- Indeks untuk tabel `Candidates`
--
ALTER TABLE `Candidates`
  ADD PRIMARY KEY (`candidate_id`);

--
-- Indeks untuk tabel `Jobs`
--
ALTER TABLE `Jobs`
  ADD PRIMARY KEY (`job_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `Candidates`
--
ALTER TABLE `Candidates`
  MODIFY `candidate_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `Jobs`
--
ALTER TABLE `Jobs`
  MODIFY `job_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `Accounts`
--
ALTER TABLE `Accounts`
  ADD CONSTRAINT `Accounts_candidate_id_Candidates_candidate_id` FOREIGN KEY (`candidate_id`) REFERENCES `Candidates` (`candidate_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Profiles_candidate_id_Candidates_candidate_id` FOREIGN KEY (`candidate_id`) REFERENCES `Candidates` (`candidate_id`),
  ADD CONSTRAINT `Profiles_job_id_Jobs_job_id` FOREIGN KEY (`job_id`) REFERENCES `Jobs` (`job_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
