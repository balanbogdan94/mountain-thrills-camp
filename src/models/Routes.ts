type TRoute = {
  name: string;
  translationKey: string;
  path: string;
};

const ZeroPointRoutes = {
  Home: {
    name: "Acasă",
    translationKey: "Nav_Bar_Home",
    path: "/",
  },
  AboutUs: {
    name: "Despre noi",
    translationKey: "Nav_Bar_About_Us",
    path: "/despre-noi",
  },
  SummerCamp: {
    name: "Tabere de vară",
    translationKey: "Nav_Bar_Summer_Camp",
    path: "/tabere-vara",
  },
  MtbCamp: {
    name: "Tabere MTB",
    translationKey: "Nav_Bar_MTB_Camp",
    path: "/drumetii-mtb",
  },
  SkyCamps: {
    name: "Tabere SKI",
    translationKey: "Nav_Bar_Sky_Camp",
    path: "/tabere-ski",
  },
  Contact: {
    name: "Contact",
    translationKey: "Nav_Bar_Contact",
    path: "/contact",
  },
};

export default ZeroPointRoutes;

export const getRouteList: TRoute[] = Object.values(ZeroPointRoutes);
