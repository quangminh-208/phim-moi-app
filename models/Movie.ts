interface Movie {
    id: string;
    link: string;
    title: string;
    image: string;
    vnTitle: string;
    enTitle: string;
    views: number;
    status: string;
    rate: number;
    categories: {
        id: string[];
        name: string;
        slug: string;
        _id: string;
    }[];
    countries: {
        id: string[];
        name: string;
        slug: string;
        _id: string;
    }[];
    content: string;
}

export default Movie;
