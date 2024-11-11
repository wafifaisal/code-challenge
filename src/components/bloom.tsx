import styles from "@/app/styles/CatLayout.module.css";
import Link from "next/link";

interface BloomProps {
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void; // Function to update hover state
}

const Bloom: React.FC<BloomProps> = ({ isHovered, setIsHovered }) => {
  return (
    <div className={styles.cat}>
      <div className={styles.catMain}>
        <div
          className={styles.info}
          onMouseEnter={() => setIsHovered(true)} // Update the parent hover state
          onMouseLeave={() => setIsHovered(false)} // Update the parent hover state
        ></div>

        <Link href="/about" className={styles.portfolioLink}>
          <div
            className={`${styles.petal} ${styles.portfolio} ${
              isHovered ? styles.hovered : ""
            }`}
          ></div>
        </Link>
        <Link href="/about" className={styles.contactLink}>
          <div
            className={`${styles.petal} ${styles.contact} ${
              isHovered ? styles.hovered : ""
            }`}
          ></div>
        </Link>
        <Link href="/about" className={styles.socialmediaLink}>
          <div
            className={`${styles.petal} ${styles.socialmedia} ${
              isHovered ? styles.hovered : ""
            }`}
          ></div>
        </Link>
        <Link href="/about" className={styles.inspirationLink}>
          <div
            className={`${styles.petal} ${styles.inspiration} ${
              isHovered ? styles.hovered : ""
            }`}
          ></div>
        </Link>
        <Link href="/about" className={styles.mysteryLink}>
          <div
            className={`${styles.petal} ${styles.mystery} ${
              isHovered ? styles.hovered : ""
            }`}
          ></div>
          <Link
            href="/about"
            target="_blank"
            className="relative z-30 flex justify-center"
          >
            <div className={`${styles["tooltip-content"]} my-[75px] `}>
              Explore the Blooms
            </div>
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default Bloom;
