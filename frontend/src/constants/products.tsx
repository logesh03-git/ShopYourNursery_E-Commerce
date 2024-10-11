export type productProps = {
  id: number;
  title: string;
  price: number;
  img: string;
  tag?: string;
  size: string[];
};
export const products: productProps[] = [
  {
    id: 1,
    title: "Monstera Deliciosa",
    price: 80,
    img: "https://s3-alpha-sig.figma.com/img/3665/6b0c/6916bf87e9e53802eeaf0c523ec63bb1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UDsrf9ckQHF0Y~AGwSBTzUfceXZW2km1Gpargcuh4Zbazuoc0UCJG7IJqSAyNN53~irbZQc-jMk27NwuON2qFe1yuWbuFUrCrbhPsyYHjw7F3AjY9BZ8hMn-0PalwRaY4Y8IAAG1oK2lIJvw01ZP3~5gUMKBD~QWZpuCORa-OV7pjqhy6y~ScNt4p9A0H5J1O3wZKsoTUlV6fiCG49gS5il-sF-sakKvt9PkZTaPLOD7hkyiXtj06h-WNtsE-Kuk1skpmFUeoLtHBPGiWrHufM3w3JN6F8fPO1ExVTJms-wY~F3QAwdHia1KPeqhmN90ZEtYddw-uIHPT6GgLu4TSQ__",
    tag: "New",
    size: ["small", "medium", "large"],
  },
  {
    id: 2,
    title: "Fiery Philo Trio",
    price: 108,
    img: "https://s3-alpha-sig.figma.com/img/9fe5/ecb1/9f2ecc64a80be7804f4711ee07367a0a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kqjAjvurGWRyWWFDC7d6DbrCosLkobU3KYuW5eoVEP~f1Pp-zAFzyscHinyazpXqcuL2nUHrlYpJ9qPpdVMX-NA-4auCZgejHAYBhO0GMaBwcGtauEYR6oa-Wr2XuL87HHfMdvas~AO-rpeMm2JmC1SqaoJxNQ7p1SX98etcWYyrAIvk834ZMB4unSh4suO9FOBfN9t6DnogWOvrXFQYmT~L7AE3iqVMg3Db0ZXtF3hPvrC1S-Lk7H7SrQSvdwgxb0OR-b~apWsw9RsCBFQws6HEk81zKFDJwCJ8oVF5jHNRu0WSRajrfxus3hwB0PTcWvX3jACOTq4EozzZsWVn0Q__",
    tag: "",
    size: ["small", "medium"],
  },
  {
    id: 3,
    title: "Bird of Paradise",
    price: 70,
    img: "https://s3-alpha-sig.figma.com/img/381d/77b8/14d4772f035163732b1f68e4dd5e1511?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q78sgR4DuX3g~LhJqhtM0YF-A9cL39zfDWWKWh0D~IZvwjUEwXiD1NngbbPGVMoF1UvblU2V9DyIAR0xWLxSbXAuJQ72Z2T52OU7vDMBqgXI5H4EnfHxQGM5YqCGh0Q3tRg7Z-4if-mU7toNosMrfgm3vkNdAci8PV5lDPQ06DVBLPxyeeHRPcXOSSdouMy5V6C71DCH-IuWXX3Bt6J55~oYBfRw7fklonJurX9-ahx2boAKYu5HetWwbimM42E3X486buuuIombkWdcLP5aZiEVHK2tI43ZIsp31P9Gl~kl~3rhUSoW8rMdo0pcdTMhmT0ftBSXE4drbQUZxD3ayA__",
    tag: "Best Seller",
    size: ["small", "medium", "large"],
  },
  {
    id: 4,
    title: "Whale Fin Sansaveria",
    price: 100,
    img: "https://s3-alpha-sig.figma.com/img/e953/b9bc/6837151cf9356d68b20479893460ad82?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IyXUfELbeOLgDxo0OlhCS0ma8zQU2IixFlgx-UPY3iu01Pn4mTDr-MMTeIR5QN9gfZ~ADimeNJSHQll7zy6t40m-~El3TsPE4DOn4g~DpSZiqwHh8YXwNwR2EmNKE~tGSu7x1GMo74NMaGp34V8hiIUhCwkfqNeDBOIQ08CO1jR1Tq~eOt2iH~PRwF3rxZsM~U~NNqGkXpTrZakc10hUUzgHiaqsGCMgC5D4g4JF4UxLGqkCDvW4paX6xZtJUALOo7VVGjB5frF21icd2JGGrIE5MThgSjJqa0EIayGnTTwtesZ-OKFGJXtJqR1o2EfB10DpGwi2rwf53GHU8DAXSQ__",
    tag: "On Sale",
    size: ["small", "medium", "large"],
  },
];
