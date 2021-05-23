<template>
    <div class="skills">

        <transition name="fade">
            <div class="skills-box" v-if="skillsList.includes('data')">
                <div class="skills-header">
                    data
                </div>
                <div class="skills-about">
                    I've worked primarily with MS SQL Server and PowerBI, and have experience building ETL processes.
                    Some of my significant projects have been:
                    <ul>
                        <li> Creating reports in PowerBI to analyse our ticketing system data on a macro and individual level </li>
                        <li>Writing ETL scripts to copy data from our ticketing system REST API and store it in a SQL database for easier reporting</li>
                        <li> Writing ETL scripts to sync our Trello task lists and store in a SQL database </li>
                    </ul>
                </div>
                <div class="skills-list">
                Specific skills:
                <ul>
                    <li> Microsoft SQL Server </li>
                    <li> PowerBI </li>
                    <li> Data transformation, ETL </li>
                </ul>
                </div>
                
            </div>
        </transition>
        

        <transition name="fade">
            <div class="skills-box" v-if="skillsList.includes('development')">
                <div class="skills-header">
                    development
                </div>
                <div class="skills-about">
                    I enjoy building things! I've scripted lots of tasks in my career (see "automation" section), and have some experience developing web apps and other tools for internal use.
                    I've built a number of smaller projects using HTML, CSS and JavaScript (Vue.js), such as:
                    <ul>
                        <li>a tool to visualise racks in a datacenter, linked to a custom asset database</li>
                        <li>an addon for our ticketing system, to remind staff to add in billable time & set fields correctly</li>
                        <li>a website for a makeup artist</li>
                        <li>my own personal blog</li>
                        <li>this resume</li>
                    </ul>
                    I have also worked on ASP.NET Web Apps (ported a client reporting portal from ASP.NET to .NET Core), and built rating app for a homebrew competition, on ASP.NET Core & Razor Pages.
                    I have become familiar with Git, and building simple CI/CD pipelines in a variety of build systems.
                </div>
                <div class="skills-list">
                    Specific skills:
                    <ul>
                        <li>PowerShell scripting</li>
                        <li>JavaScript</li>
                        <li>HTML & CSS</li>
                        <li>Familiarity with C# and Python</li>
                        <li>Git</li>
                        <li>CI/CD - Azure DevOps, GitHub Actions, GitLab CI/CD</li>
                    </ul>
                </div>
            
            </div>
        </transition>
        <transition name="fade">
            <div class="skills-box" v-if="skillsList.includes('euc')">
                <div class="skills-header">
                    end user computing
                </div>
                <div class="skills-about">
                    I have architected, implemented and maintained End User Computing systems (primarily Citrix and RDS) for > 2,500 users.
                    I've worked with Windows Server and related technologies for many years.
                </div>
                <div class="skills-list">
                    Specific skills:
                    <ul>
                        <li>Citrix/RDS/Terminal Servers</li>
                        <li>Application delivery - App-V, Published Apps</li>
                        <li>Application troubleshooting - procmon, procexp, Wireshark, Fiddler
                        <li>Group Policy</li>
                        <li>Intune</li>
                        <li>Windows File Server, DFS</li>
                    </ul>
                </div>
            
            </div>
        </transition>
        <transition name="fade">
            <div class="skills-box" v-if="skillsList.includes('identity')">
                <div class="skills-header">
                    identity
                </div>
                <div class="skills-about">
                    I've worked with Active Directory, ADFS, Azure AD Connect, and other Microsoft identity solutions.
                    I'm comfortable setting up & configuring domains, Active Directory Federation Services (ADFS), and connecting SAML identity providers and services together.                   
                </div>
                <div class="skills-list">
                    Specific skills:
                    <ul>
                        <li>Active Directory - Design & maintenance</li>
                        <li>Active Directory Federation Services</li>
                        <li>Azure AD Connect</li>
                        <li>SAML</li>
                    </ul>
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div class="skills-box" v-if="skillsList.includes('leadership')">
                <div class="skills-header">
                    leadership
                </div>
                <div class="skills-about">
                    I've lead small teams, and have been involved in the full cycle of employee management - hiring, day to day management, goal setting, coaching, and reviews.
                    I enjoy training others and helping them overcome obstacles.
                </div>
                <div class="skills-list">
                    Specific skills:
                    <ul>
                        <li>Team management & scheduling</li>
                        <li>Goal setting</li>
                        <li>Coaching</li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div class="skills-box" v-if="skillsList.includes('cloud')">
                <div class="skills-header">
                    cloud
                </div>
                <div class="skills-about">
                    I've worked primarily with Microsoft Hyper-V and System Center products (i.e. VMM) in private cloud scenarios, and am familiar with VMware vSphere.
                    On the public cloud side, I've deployed a wide range of services in Microsoft Azure and Office 365.

                    One of my recent projects was using Azure API Management & Logic Apps to develop a simplified REST API, for a custom configuration management database (CMDB).

                    I've also been involved in the migration and ongoing management of numerous Office 365 configurations, using Exchange Online, SharePoint Online and OneDrive.

                </div>
                <div class="skills-list">
                    <ul>
                        <li>Microsoft Hyper-V</li>
                        <li>System Center (Virtual Machine Manager)</li>
                        <li>Azure IaaS</li>
                        <li>Azure SQL (PaaS and IaaS)</li>
                        <li>Azure Web Apps (both App Service and Static Web Apps)</li>
                        <li>Azure Logic Apps</li>
                        <li>Azure API Management</li>
                        <li>Office 365 - Exchange Online & Hybrid Exchange</li>
                        <li>Office 365 - SharePoint Online/OneDrive</li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="fade">            
            <div class="skills-box" v-if="skillsList.includes('automation')">
                <div class="skills-header">
                    automation
                </div>
                <div class="skills-about">
                    Working mostly on Windows servers and desktops, PowerShell is my go-to scripting language. 
                    Some of the things I've scripted/automated are:
                    <ul>
                        <li>Scripted the provisioning and weekly update of Citrix VMs in PowerShell</li>
                        <li>Built New Server request form that automatically submits change requests to relevant teams, in Salesforce</li>
                        <li>Used Zapier to collect email alerts from our monitoring system, parse the email and collate with information from a CMDB, then create/update tickets in a ticketing system</li>
                        <li>Created a series of Logic Apps and used Azure API Management, to create a simple REST API for a CMDB</li>
                        <li>Built a PowerShell module for working with a corporate timesheet tracking system</li>
                        <li>Created user provisioning scripts</li>
                        <li>Built Power Automate/Flows to automate daily tasks like creating tasks from emails or meeting notes</li>
                    </ul>
                </div>
                <div class="skills-list">
                    Specific skills:
                <ul>
                    <li>Scripting languages - PowerShell, Python</li>
                    <li>Low code tools - Zapier, Power Automate/Flow, Logic Apps, Salesforce Flow</li>
                    <li>Working with REST APIs</li>
                </ul>
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div class="skills-box" v-if="skillsList.includes('networking')">
                <div class="skills-header">
                    networking
                </div>
                <div class="skills-about">
                    I'm comfortable configuring Citrix NetScalers for load balancing & GSLB setup, and have experience using WebMarshal proxies. 
                    I can troubleshoot network related issues using tools like Fiddler, Wireshark, netstat, curl, and... ping.
                </div>
                <div class="skills-list">
                    Specific skills:
                <ul>
                    <li>Load balancers - Citrix NetScaler</li>
                    <li>Web Proxies</li>
                    <li>DNS - Windows DNS Server</li>
                    <li>GSLB</li>
                </ul>
                </div>
            </div>               
        </transition>
    </div>
</template>

<script>
import { store } from '../store/store.js'

export default {
    name: 'skills',
    computed: {
        skillsList() {
            return store.state.skillsList
        }
    }
}
</script>

<style>

.skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));    
    padding: 2em;
    color: rgb(230, 230, 230);

}

.skills-box {
    border: 2px solid #999999;
    border-radius: 5px;
    padding: 0.8em;
    text-align: left;

}

.skills-list {
    padding-top: 1em;
}

.skills-header {
    font-size: 2em;
    text-decoration: underline;
    text-align: center;
    padding-bottom: 0.5em;
}

li {
    padding: 0.2rem
}

.fade-enter-active {
  transition: opacity 0.8s;
}

.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>