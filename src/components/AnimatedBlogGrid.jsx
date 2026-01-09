'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.9,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: -30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const subtitleVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut"
    }
  }
};

const tagVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const paginationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.8
    }
  }
};

export default function AnimatedBlogGrid({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Sort blogs by date (latest first) and paginate
  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [blogs]);

  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);
  
  const currentBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return sortedBlogs.slice(startIndex, endIndex);
  }, [sortedBlogs, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of blog grid
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers array
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-400 bg-clip-text text-transparent mb-4"
            variants={titleVariants}
          >
            Orthopedic Health Insights
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            variants={subtitleVariants}
          >
            Expert articles on joint care, surgical advances and healthy living by Dr. Abhishek Saxena
          </motion.p>
          <motion.div
            className="mt-4 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Showing {Math.min((currentPage - 1) * blogsPerPage + 1, sortedBlogs.length)}-{Math.min(currentPage * blogsPerPage, sortedBlogs.length)} of {sortedBlogs.length} articles
          </motion.div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPage}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {currentBlogs.map((blog, index) => (
              <motion.article 
                key={`${blog.id}-${currentPage}`} 
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                itemScope
                itemType="https://schema.org/BlogPosting"
                layout
              >
                <motion.div 
                  className="relative aspect-square w-full overflow-hidden" 
                  itemProp="image" 
                  itemScope 
                  itemType="https://schema.org/ImageObject"
                >
                  <motion.div
                    variants={imageVariants}
                    whileHover="hover"
                    className="w-full h-full"
                  >
                    <Image 
                      src={blog.image || '/images/placeholder.jpg'} 
                      alt={blog.alt || blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority={index <= 2}
                    />
                  </motion.div>
                  <meta itemProp="url" content={blog.image} />
                </motion.div>
                
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <motion.div 
                    className="flex items-center mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <time 
                      dateTime={new Date(blog.date).toISOString()} 
                      itemProp="datePublished"
                      className="text-sm text-gray-500"
                    >
                      {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </time>
                    <span className="mx-2 text-gray-400">•</span>
                    <span itemProp="author" className="text-sm text-blue-600">
                      {blog.author || "Dr. Abhishek Saxena"}
                    </span>
                  </motion.div>
                  
                  <motion.h2 
                    className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-700 transition-colors duration-300" 
                    itemProp="headline"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    <Link href={`/blog/${blog.slug}`} itemProp="url">
                      {blog.heading}
                    </Link>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-gray-700 mb-4" 
                    itemProp="description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    {blog.excerpt || blog.content?.substring(0, 120)}...
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.1, delayChildren: index * 0.1 + 0.9 }}
                  >
                    {blog.tags && blog.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex} 
                        className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        variants={tagVariants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 1.0 }}
                  >
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-block bg-gradient-to-r from-blue-900 to-cyan-400 text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
                      aria-label={`Read more about ${blog.title}`}
                      itemProp="url"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Read More →
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="flex items-center justify-center mt-12 space-x-2"
            variants={paginationVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Previous Button */}
            <motion.button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                  : 'text-gray-700 bg-white hover:bg-blue-50 hover:text-blue-600 shadow-sm'
              }`}
              whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
              whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </motion.button>

            {/* Page Numbers */}
            <div className="flex space-x-1">
              {getPageNumbers().map((page, index) => (
                <motion.div key={index}>
                  {page === '...' ? (
                    <span className="px-3 py-2 text-gray-500">...</span>
                  ) : (
                    <motion.button
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-gradient-to-r from-blue-900 to-cyan-400 text-white shadow-lg'
                          : 'text-gray-700 bg-white hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {page}
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                  : 'text-gray-700 bg-white hover:bg-blue-50 hover:text-blue-600 shadow-sm'
              }`}
              whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
              whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}