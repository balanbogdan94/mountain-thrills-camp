type TRoute = {
  name: string;
  path: string;
};

const ZeroPointRoutes = {
  Home: {
    name: "Acasă",
    path: "/",
  },
  AboutUs: {
    name: "Despre noi",
    path: "/despre-noi",
  },
  SummerCamp: {
    name: "Tabere de vară",
    path: "/tabere-vara",
  },
  MtbCamp: {
    name: "Tabere MTB",
    path: "/drumetii-mtb",
  },
  SkyCamps: {
    name: "Tabere SKI",
    path: "/tabere-ski",
  },
  Contact: {
    name: "Contact",
    path: "/contact",
  },
};

export default ZeroPointRoutes;

export const getRouteList: TRoute[] = Object.values(ZeroPointRoutes);
