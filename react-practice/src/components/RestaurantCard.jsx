import styles from "./RestaurantCard.module.css";

function RestaurantCard({ icon, name, category, description, rating }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageArea} aria-hidden="true">
        {icon}
      </div>

      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>{name}</h2>
          <span className={styles.rating}>★ {rating}</span>
        </div>

        <p className={styles.category}>{category}</p>
        <p className={styles.description}>{description}</p>

        <button className={styles.detailButton} type="button">
          자세히 보기
        </button>
      </div>
    </article>
  );
}

export default RestaurantCard;
