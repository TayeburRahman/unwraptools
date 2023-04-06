import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

function TagHome({path}) { 

    return (
        <div className='boxTag'>

<Box className={`withTag`}><Link className={`linkTag ${path === "Copywriting" && "showBd"}`}  to="/categories/Copywriting">Copywriting</Link> </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "General_Writing" && "showBd"}`}  to="/categories/General_Writing">General Writing</Link> </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Email_Assistant" && "showBd"}`}  to="/categories/Email_Assistant">Email Assistant</Link> </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Paraphraser" && "showBd"}`}  to="/categories/Paraphraser">Paraphraser</Link> </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Story_Teller" && "showBd"}`} to="/categories/Story_Teller">Story Teller</Link></Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Summarizer" && "showBd"}`}  to="/categories/Summarizer">Summarizer</Link></Box>
<Box className={`withTag `}><Link className={`linkTag ${path === "Art" && "showBd"}`} to="/categories/Art">Art</Link></Box>
<Box className={`withTag `}><Link className={`linkTag ${path === "Design_Assistant" && "showBd"}`} to="/categories/Design_Assistant">Design Assistant</Link> </Box>
<Box className={`withTag `}><Link className={`linkTag ${path === "Image_Generator" && "showBd"}`} to="/categories/Image_Generator">Image Generator</Link> </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Design" && "showBd"}`} to="/categories/Design">Design</Link>  </Box> 
<Box className={`withTag`}><Link className={`linkTag ${path === "Avatars" && "showBd"}`}  to="/categories/Avatars">Avatars</Link></Box>
<Box className={`withTag ${path === "Image_Editing" && "showBd"}`}><Link className={`linkTag ${path === "Image_Editing" && "showBd"}`}  to="/categories/Image_Editing">Image Editing</Link> </Box>
<Box className={`withTag`}> <Link className={`linkTag ${path === "Logo_Generator" && "showBd"}`}  to="/categories/Logo_Generator">Logo Generator</Link> </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Audio_Editing" && "showBd"}`}   to="/categories/Audio_Editing">Audio Editing</Link>   </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Text_Speech" && "showBd"}`}  to="/categories/Text_Speech">Text Speech</Link>     </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Music" && "showBd"}`}  to="/categories/Music">Music</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Transcriber" && "showBd"}`}  to="/categories/Transcriber">Transcriber</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Personalized_Videos" && "showBd"}`}  to="/categories/Personalized_Videos">Personalized Videos</Link></Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Video_Editing" && "showBd"}`}  to="/categories/Video_Editing">Video Editing</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "3D" && "showBd"}`}  to="/categories/3D">3D</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "SEO" && "showBd"}`}   to="/categories/SEO">SEO</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "E-commerce" && "showBd"}`}   to="/categories/E-commerce">E-commerce</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Social_Media" && "showBd"}`}   to="/categories/Social_Media">Social Media</Link></Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Sales" && "showBd"}`}   to="/categories/Sales">Sales</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Email_Marketing" && "showBd"}`}   to="/categories/Email_Marketing">Email Marketing</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Fashion" && "showBd"}`}    to="/categories/Fashion">Fashion</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Fun_Tools" && "showBd"}`}    to="/categories/Fun_Tools">Fun Tools</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Gift_Ideas" && "showBd"}`}   to="/categories/Gift_Ideas">Gift Ideas</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Life_Assistant" && "showBd"}`}   to="/categories/Life_Assistant">Life Assistant</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Fitness" && "showBd"}`}    to="/categories/Fitness">Fitness</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Real_Estate" && "showBd"}`}  to="/categories/Real_Estate">Real Estate</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Gaming" && "showBd"}`}   to="/categories/Gaming">Gaming</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Healthcare" && "showBd"}`}    to="/categories/Healthcare">Healthcare</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Memory" && "showBd"}`}   to="/categories/Memory">Memory</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Prompts" && "showBd"}`}    to="/categories/Prompts">Prompts</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Developer" && "showBd"}`}    to="/categories/Developer">Developer</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Spreadsheets" && "showBd"}`}   to="/categories/Spreadsheets">Spreadsheets</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Testing_QA" && "showBd"}`}    to="/categories/Testing_QA">Testing QA</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Code_Assistant" && "showBd"}`}  to="/categories/Code_Assistant">Code Assistant</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "SQL" && "showBd"}`}  to="/categories/SQL">SQL</Link>    </Box> 
<Box className={`withTag`}><Link className={`linkTag ${path === "Low-Code" && "showBd"}`}   to="/categories/Low-Code">Low-Code</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Customer_Support" && "showBd"}`}    to="/categories/Customer_Support">Customer Support</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Startup" && "showBd"}`}   to="/categories/Startup">Startup</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Human_Resources" && "showBd"}`}    to="/categories/Human_Resources">Human Resources</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Presentations" && "showBd"}`}   to="/categories/Presentations">Presentations</Link>    </Box>
 
<Box className={`withTag`}><Link className={`linkTag ${path === "Productivity" && "showBd"}`}  to="/categories/Productivity">Productivity</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Education_Assistant" && "showBd"}`}   to="/categories/Education_Assistant">Education Assistant</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Research" && "showBd"}`}   to="/categories/Research">Research</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "AI_Search-Engines" && "showBd"}`}  to="/categories/AI_Search-Engines">AI Search-Engines</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Experiments" && "showBd"}`}   to="/categories/Experiments">Experiments</Link>    </Box>
<Box className={`withTag`}><Link className={`linkTag ${path === "Resources" && "showBd"}`}   to="/categories/Resources">Resources</Link>    </Box>
        </div>
    )
}
export default TagHome

// export default TagHome
// const CategoriesSec = [
//     'Copywriting', 'General Writing', 'Email Assistant', 'Paraphraser', 'Story Teller', "Summarizer", 'Art', 'Design Assistant', 'Image Generator', 'Design', "Avatars", 'Image Editing', 'Logo Generator', 'Audio Editing', "Text To Speech", "Music", 'Transcriber', 'Personalized Videos', 'Video Editing', "Video Editing", "3D", 'SEO', 'E-commerce', 'Social Media Assistant', "Sales", 'Email Marketing', "Fashion", "Fun Tools", 'Gift Ideas', 'Life Assistant', 'Fitness', "Real Estate", "Gaming", "Healthcare", "Memory", "Prompts", "Developer", "Spreadsheets", "Testing & QA",
//     'Code Assistant', 'Low-Code/No-Code', 'SQL', "Customer Support", "Human Resources", "Presentations", "Startup", "Finance", "Legal Assistant", "Startup", 'Productivity', 'Education Assistant', "Research", "AI Search Engines", "Experiments", "Resources"

// ];