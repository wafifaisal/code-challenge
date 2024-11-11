import Link from "next/link";
import React from "react";
import styles from "@/app/styles/Sewing.module.css";

export default function NotFoundPage() {
  return (
    <div className="h-screen bg-[#e3f1ff] flex flex-col justify-center items-center text-center p-4">
      <h2 className="text-5xl font-semibold text-[#4a90e2] my-6">
        Coming Soon!
      </h2>
      <div className="relative -translate-x-24">
        <div className={styles["sewing-stuff"]}>
          <div className={`${styles.tape}`}>
            <div className={styles["tape-top"]}></div>
            <div className={styles["tape-bottom"]}></div>
          </div>

          <div className={styles["pin-cushion"]}>
            <div className={styles.pins}>
              <div className={styles.pin}></div>
              <div className={styles.pin}></div>
              <div className={styles.pin}></div>
              <div className={styles.pin}></div>
              <div className={styles.pin}></div>
              <div className={styles.pin}></div>
            </div>
            <div className={styles.table}></div>
          </div>

          <div className={styles["sewing-machine"]}>
            <div className={styles.thread}></div>
            <div className={styles.needle}></div>
            <div className={styles["machine-top"]}></div>
            <div className={styles["machine-right"]}></div>
            <div className={styles["machine-bottom"]}></div>
          </div>
        </div>
      </div>

      {/* Back button */}
      <Link href="/">
        <div className="mt-8 text-xl text-white bg-[#4a90e2] py-2 px-6 rounded-full hover:bg-[#357ab7] transition duration-300 ease-in-out">
          ← Back to Home
        </div>
      </Link>
    </div>
  );
}
