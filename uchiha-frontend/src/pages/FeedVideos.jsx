import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VideoGrid } from "../components/index";
import { emptyPagingVideosData, getAllVideosByOption } from "../app/Slices/paginationSlice";

function FeedVideos({gridClassName, itemClassName}) {
  const dispatch = useDispatch();

  const { loading } = useSelector(({ pagingVideos }) => pagingVideos);
  const { videos } = useSelector(({ pagingVideos }) => pagingVideos.data);
  const { pagingInfo } = useSelector(({ pagingVideos }) => pagingVideos.data);

  const sectionRef = useRef();
  const fetchedPageRef = useRef();
  const pagingInfoRef = useRef(pagingInfo);

  pagingInfoRef.current = pagingInfo;

  useEffect(() => {
    fetchedPageRef.current = new Set();

    sectionRef.current = document.getElementById("scrollable_results_screen");
    sectionRef.current?.scrollTo({ top: 0, behavior: "smooth" });

    let fetchAllVideosPromise = dispatch(getAllVideosByOption({ page: 1, limit: 15 }));

    fetchAllVideosPromise.then(() => {
      fetchedPageRef.current.add(1);
    });
    sectionRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      sectionRef.current?.removeEventListener("scroll", handleScroll);
      fetchedPageRef.current.clear();
      dispatch(emptyPagingVideosData());
      fetchAllVideosPromise.abort();
      sectionRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, []); // [dispatch, location.pathname]

  const handleScroll = () => {
    const section = sectionRef.current;
    const scrollHeight = section.scrollHeight;
    const scrolledValue = section.clientHeight + section.scrollTop;

    if (scrolledValue + 5 > scrollHeight) {
      const currentPagingInfo = pagingInfoRef.current;
      if (
        currentPagingInfo.hasNextPage &&
        !fetchedPageRef.current?.has(currentPagingInfo.nextPage)
      ) {
        fetchedPageRef.current.add(currentPagingInfo.nextPage);
        dispatch(getAllVideosByOption({ page: `${currentPagingInfo.nextPage}`, limit: 15 }));
      }
    }
  };

  return (
    <VideoGrid
      videos={videos}
      loading={loading && !fetchedPageRef.current.has(1)}
      fetching={loading && videos?.length > 0}
      gridClassName={gridClassName}
      itemClassName={itemClassName}
    />
  );
}

export default FeedVideos;
