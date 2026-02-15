/**
 * Google Drive Links Configuration
 * Replace the placeholder URLs with your actual Google Drive direct links
 * 
 * HOW TO GET GOOGLE DRIVE DIRECT LINKS:
 * 1. Upload file to Google Drive
 * 2. Right-click file → Get link → Change to "Anyone with the link"
 * 3. Copy the file ID from the URL (between /d/ and /view)
 * 4. Use format: https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
 * 
 * For PDFs use: https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
 */

const DRIVE_LINKS = {
    // ==================== LOGOS ====================
    LOGO_SMALL: 'https://drive.google.com/uc?export=view&id=YOUR_LOGO_SMALL_ID',
    LOGO_LARGE: 'https://drive.google.com/uc?export=view&id=YOUR_LOGO_LARGE_ID',
    
    // ==================== SLIDER IMAGES ====================
    SLIDER: {
        BUILDING: 'https://drive.google.com/uc?export=view&id=YOUR_BUILDING_ID',
        CLASSROOM: 'https://drive.google.com/uc?export=view&id=YOUR_CLASSROOM_ID',
        PLAYGROUND: 'https://drive.google.com/uc?export=view&id=YOUR_PLAYGROUND_ID',
        LIBRARY: 'https://drive.google.com/uc?export=view&id=YOUR_LIBRARY_ID',
        STUDENTS: 'https://drive.google.com/uc?export=view&id=YOUR_STUDENTS_ID'
    },
    
    // ==================== ABOUT SECTION ====================
    SCHOOL_FRONT: 'https://drive.google.com/uc?export=view&id=YOUR_SCHOOL_FRONT_ID',
    
    // ==================== PRINCIPAL ====================
    HEADMASTER: 'https://drive.google.com/uc?export=view&id=YOUR_HEADMASTER_ID',
    
    // ==================== TEACHERS ====================
    TEACHERS: {
        TEACHER1: 'https://drive.google.com/uc?export=view&id=YOUR_TEACHER1_ID',
        TEACHER2: 'https://drive.google.com/uc?export=view&id=YOUR_TEACHER2_ID',
        TEACHER3: 'https://drive.google.com/uc?export=view&id=YOUR_TEACHER3_ID',
        TEACHER4: 'https://drive.google.com/uc?export=view&id=YOUR_TEACHER4_ID',
        TEACHER5: 'https://drive.google.com/uc?export=view&id=YOUR_TEACHER5_ID',
        TEACHER6: 'https://drive.google.com/uc?export=view&id=YOUR_TEACHER6_ID',
        TEACHER7: 'https://drive.google.com/uc?export=view&id=YOUR_TEACHER7_ID',
        TEACHER8: 'https://drive.google.com/uc?export=view&id=YOUR_TEACHER8_ID'
    },
    
    // ==================== GALLERY ====================
    GALLERY: {
        IMAGE1: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY1_ID',
        IMAGE2: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY2_ID',
        IMAGE3: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY3_ID',
        IMAGE4: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY4_ID',
        IMAGE5: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY5_ID',
        IMAGE6: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY6_ID'
    },
    
    // ==================== ACHIEVEMENTS ====================
    ACHIEVEMENTS: {
        IMAGE1: 'https://drive.google.com/uc?export=view&id=YOUR_ACHIEVEMENT1_ID',
        IMAGE2: 'https://drive.google.com/uc?export=view&id=YOUR_ACHIEVEMENT2_ID',
        IMAGE3: 'https://drive.google.com/uc?export=view&id=YOUR_ACHIEVEMENT3_ID',
        IMAGE4: 'https://drive.google.com/uc?export=view&id=YOUR_ACHIEVEMENT4_ID',
        IMAGE5: 'https://drive.google.com/uc?export=view&id=YOUR_ACHIEVEMENT5_ID'
    },
    
    // ==================== GOVERNMENT LOGOS ====================
    GOVT_LOGOS: {
        ASSAM: 'https://drive.google.com/uc?export=view&id=YOUR_ASSAM_LOGO_ID',
        EDUCATION: 'https://drive.google.com/uc?export=view&id=YOUR_EDU_LOGO_ID',
        SEBA: 'https://drive.google.com/uc?export=view&id=YOUR_SEBA_LOGO_ID',
        DIKSHA: 'https://drive.google.com/uc?export=view&id=YOUR_DIKSHA_LOGO_ID'
    },
    
    // ==================== NOTICE PDFs ====================
    NOTICES: {
        EXAM_SCHEDULE: 'https://drive.google.com/uc?export=download&id=YOUR_EXAM_NOTICE_ID',
        PTM_NOTICE: 'https://drive.google.com/uc?export=download&id=YOUR_PTM_NOTICE_ID',
        SPORTS_DAY: 'https://drive.google.com/uc?export=download&id=YOUR_SPORTS_NOTICE_ID'
    },
    
    // ==================== CERTIFICATES ====================
    CERTIFICATES: {
        SEBA: 'https://drive.google.com/uc?export=download&id=YOUR_SEBA_CERT_ID',
        STATE_APPROVAL: 'https://drive.google.com/uc?export=download&id=YOUR_STATE_CERT_ID',
        BEST_SCHOOL: 'https://drive.google.com/uc?export=download&id=YOUR_BEST_SCHOOL_ID',
        EXCELLENCE: 'https://drive.google.com/uc?export=download&id=YOUR_EXCELLENCE_ID',
        SPORTS: 'https://drive.google.com/uc?export=download&id=YOUR_SPORTS_CERT_ID',
        GREEN_SCHOOL: 'https://drive.google.com/uc?export=download&id=YOUR_GREEN_CERT_ID'
    },
    
    // ==================== RESULTS PDFs ====================
    RESULTS: {
        CLASS1: {
            YEAR_2024: 'https://drive.google.com/uc?export=download&id=YOUR_C1_2024_ID',
            YEAR_2023: 'https://drive.google.com/uc?export=download&id=YOUR_C1_2023_ID',
            YEAR_2022: 'https://drive.google.com/uc?export=download&id=YOUR_C1_2022_ID'
        },
        CLASS2: {
            YEAR_2024: 'https://drive.google.com/uc?export=download&id=YOUR_C2_2024_ID',
            YEAR_2023: 'https://drive.google.com/uc?export=download&id=YOUR_C2_2023_ID',
            YEAR_2022: 'https://drive.google.com/uc?export=download&id=YOUR_C2_2022_ID'
        },
        CLASS3: {
            YEAR_2024: 'https://drive.google.com/uc?export=download&id=YOUR_C3_2024_ID',
            YEAR_2023: 'https://drive.google.com/uc?export=download&id=YOUR_C3_2023_ID',
            YEAR_2022: 'https://drive.google.com/uc?export=download&id=YOUR_C3_2022_ID'
        },
        CLASS4: {
            YEAR_2024: 'https://drive.google.com/uc?export=download&id=YOUR_C4_2024_ID',
            YEAR_2023: 'https://drive.google.com/uc?export=download&id=YOUR_C4_2023_ID',
            YEAR_2022: 'https://drive.google.com/uc?export=download&id=YOUR_C4_2022_ID'
        },
        CLASS5: {
            YEAR_2024: 'https://drive.google.com/uc?export=download&id=YOUR_C5_2024_ID',
            YEAR_2023: 'https://drive.google.com/uc?export=download&id=YOUR_C5_2023_ID',
            YEAR_2022: 'https://drive.google.com/uc?export=download&id=YOUR_C5_2022_ID'
        }
    }
};

// Function to load images dynamically
function loadImages() {
    // Load Logos
    document.querySelectorAll('.logo-img').forEach(img => {
        img.src = DRIVE_LINKS.LOGO_SMALL;
    });
    
    document.querySelectorAll('.banner-logo').forEach(img => {
        img.src = DRIVE_LINKS.LOGO_LARGE;
    });
    
    // Load Slider Images
    const sliderImages = document.querySelectorAll('.slide img');
    if (sliderImages.length >= 5) {
        sliderImages[0].src = DRIVE_LINKS.SLIDER.BUILDING;
        sliderImages[1].src = DRIVE_LINKS.SLIDER.CLASSROOM;
        sliderImages[2].src = DRIVE_LINKS.SLIDER.PLAYGROUND;
        sliderImages[3].src = DRIVE_LINKS.SLIDER.LIBRARY;
        sliderImages[4].src = DRIVE_LINKS.SLIDER.STUDENTS;
    }
    
    // Load About Section Image
    document.querySelectorAll('.about-image img').forEach(img => {
        img.src = DRIVE_LINKS.SCHOOL_FRONT;
    });
    
    // Load Principal Image
    document.querySelectorAll('.desk-image img').forEach(img => {
        img.src = DRIVE_LINKS.HEADMASTER;
    });
    
    // Load Teacher Images
    const teacherImages = document.querySelectorAll('.staff-image img');
    const teacherKeys = Object.values(DRIVE_LINKS.TEACHERS);
    teacherImages.forEach((img, index) => {
        if (teacherKeys[index]) {
            img.src = teacherKeys[index];
        }
    });
    
    // Load Gallery Images
    const galleryImages = document.querySelectorAll('#imageGallery .gallery-item img');
    const galleryKeys = Object.values(DRIVE_LINKS.GALLERY);
    galleryImages.forEach((img, index) => {
        if (galleryKeys[index]) {
            img.src = galleryKeys[index];
        }
    });
    
    // Load Achievement Images
    const achievementImages = document.querySelectorAll('#achievementGallery .achievement-item img');
    const achievementKeys = Object.values(DRIVE_LINKS.ACHIEVEMENTS);
    achievementImages.forEach((img, index) => {
        if (achievementKeys[index]) {
            img.src = achievementKeys[index];
        }
    });
    
    // Load Government Logos
    const govtLinks = document.querySelectorAll('.link-card');
    if (govtLinks.length >= 4) {
        govtLinks[0].querySelector('img').src = DRIVE_LINKS.GOVT_LOGOS.ASSAM;
        govtLinks[1].querySelector('img').src = DRIVE_LINKS.GOVT_LOGOS.EDUCATION;
        govtLinks[2].querySelector('img').src = DRIVE_LINKS.GOVT_LOGOS.SEBA;
        govtLinks[3].querySelector('img').src = DRIVE_LINKS.GOVT_LOGOS.DIKSHA;
    }
}

// Function to load PDFs dynamically
function loadPDFs() {
    // Load Notice PDFs
    const noticeLinks = document.querySelectorAll('#noticeContainer .notice-link');
    if (noticeLinks.length >= 3) {
        noticeLinks[0].href = DRIVE_LINKS.NOTICES.EXAM_SCHEDULE;
        noticeLinks[1].href = DRIVE_LINKS.NOTICES.PTM_NOTICE;
        noticeLinks[2].href = DRIVE_LINKS.NOTICES.SPORTS_DAY;
    }
    
    // Load Certificate PDFs
    const certLinks = document.querySelectorAll('.certificates-grid .certificate-card');
    if (certLinks.length >= 6) {
        certLinks[0].href = DRIVE_LINKS.CERTIFICATES.SEBA;
        certLinks[1].href = DRIVE_LINKS.CERTIFICATES.STATE_APPROVAL;
        certLinks[2].href = DRIVE_LINKS.CERTIFICATES.BEST_SCHOOL;
        certLinks[3].href = DRIVE_LINKS.CERTIFICATES.EXCELLENCE;
        certLinks[4].href = DRIVE_LINKS.CERTIFICATES.SPORTS;
        certLinks[5].href = DRIVE_LINKS.CERTIFICATES.GREEN_SCHOOL;
    }
    
    // Load Result PDFs
    const resultClasses = document.querySelectorAll('.results-class');
    resultClasses.forEach((classDiv, classIndex) => {
        const resultLinks = classDiv.querySelectorAll('.result-card');
        const classNum = classIndex + 1;
        const classKey = `CLASS${classNum}`;
        
        if (DRIVE_LINKS.RESULTS[classKey] && resultLinks.length >= 3) {
            resultLinks[0].href = DRIVE_LINKS.RESULTS[classKey].YEAR_2024;
            resultLinks[1].href = DRIVE_LINKS.RESULTS[classKey].YEAR_2023;
            resultLinks[2].href = DRIVE_LINKS.RESULTS[classKey].YEAR_2022;
        }
    });
}

// Load everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadImages();
    loadPDFs();
});
