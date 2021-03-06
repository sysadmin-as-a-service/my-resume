<template>
    <div class="skills">

            <div class="skills-box" v-if="skillsList.includes('automation')">
                <div class="skills-header">
                    automation
                </div>
                <div class="skills-about">
                    Working mostly on Windows servers and desktops, PowerShell is my go-to scripting language. 
                    Some of the things I've scripted/automated are:
                    <ul>
                        
                        <li>Automated the invoice & crediting of user changes in a large multi tenanted Exchange platform.</li>
                        <li>Scripted the provisioning and weekly update of Citrix VMs in PowerShell. <a href="https://github.com/sysadmin-as-a-service/citrix-scripts" target="_blank">(view on Github)</a></li>
                        <li>Built New Server request form in Salesforce submits change requests to relevant teams, then builds it in VMM.</li>
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

            <div class="skills-box" v-if="skillsList.includes('development')">
                <div class="skills-header">
                    development
                </div>
                <div class="skills-about">
                    I enjoy building things! I've scripted lots of tasks in my career (see "automation" section), and have some experience developing web apps and other tools for internal use.
                    <br/><br/>
                    I've built a number of smaller projects using HTML, CSS and JavaScript (Vue.js), such as:
                    <ul>
                        <li>a tool to visualise racks in a datacenter, linked to a custom asset database</li>
                        <li>an addon for our ticketing system, to remind staff to add in billable time & set fields correctly</li>
                        <li>a website for a makeup artist</li>
                        <li>my own personal blog <a href="https://github.com/sysadmin-as-a-service/sysadmin-blog" target="_blank">(view on Github)</a></li>
                        <li>this resume <a href="https://github.com/sysadmin-as-a-service/my-resume" target="_blank">(view on Github)</a></li>
                    </ul>
                    I have also worked on ASP.NET Web Apps (ported a client reporting portal from ASP.NET to .NET Core), and <a href="https://github.com/sysadmin-as-a-service/brewcomp" target="_blank">built rating app for a homebrew competition</a>, on ASP.NET Core & Razor Pages.
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

            <div class="skills-box" v-if="skillsList.includes('cloud')">
                <div class="skills-header">
                    cloud
                </div>
                <div class="skills-about">
                    I've worked primarily with Microsoft Hyper-V and System Center products (i.e. VMM) in private cloud scenarios, and am familiar with VMware vSphere.<br/>
                    On the public cloud side, I've deployed a wide range of services in Microsoft Azure and Office 365. I architected a solution for multiple Office 365 tenant connections, to one large multi-tenanted Active Directory domain. 
                    <p>
                    One of my recent projects was using Azure API Management & Logic Apps to develop a simplified REST API, for a custom configuration management database (CMDB).
                    </p>
                    <p>
                    I've also been involved in the migration and ongoing management of numerous Office 365 configurations, using Exchange Online, SharePoint Online and OneDrive.
                    </p>

                </div>
                <div class="skills-list">
                    Specific skills:
                    <ul>
                        <li>Azure IaaS</li>
                        <li>Azure SQL (PaaS and IaaS)</li>
                        <li>Azure Web Apps (both App Service and Static Web Apps)</li>
                        <li>Azure Logic Apps</li>
                        <li>Azure API Management</li>
                        <li>Azure AD Connect</li>
                        <li>Microsoft Hyper-V</li>
                        <li>System Center (Virtual Machine Manager)</li>
                        <li>Office 365 - Exchange Online & Hybrid Exchange</li>
                        <li>Office 365 - SharePoint Online/OneDrive</li>
                    </ul>
                </div>
            </div>

            <div class="skills-box" v-if="skillsList.includes('monitoring')">
                <div class="skills-header">
                    monitoring
                </div>
                <div class="skills-about">
                    I have been a part of on-call teams for many years, so I know the value of a well-monitored estate. 
                    <p>
                        I've worked with legacy monitoring systems such as Nagios and CheckMK,
                    as well as more modern stacks like Elasticsearch, Logsearch and Kibana (ELK), Zabbix and Pager Duty.
                    </p>

                    Some of the memorable monitoring projects I've completed:
                    <ul>
                        <li>Rolling out Event Log forwarding to ELK to improve visibility across disparate EUC platforms</li>
                        <li>Moving our after hours monitoring from a manned service to Pager Duty</li>
                        <li>Syncing monitoring events with ticketing system</li>
                    </ul>

                </div>
                <div class="skills-list">
                    Specific skills:
                    <ul>
                        <li>Nagios</li>
                        <li>CheckMK</li>
                        <li>Zabbix</li>
                        <li>Pager Duty</li>
                        <li>ELK stack</li>
                    </ul>
                </div>
            </div>


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

            <div class="skills-box" v-if="skillsList.includes('identity')">
                <div class="skills-header">
                    identity
                </div>
                <div class="skills-about">
                    I've worked with Active Directory, Azure MFA (NPS), ADFS, Azure AD Connect, and NetScaler identity solutions.
                    I've configured multi-tenant NetScaler Gateways with differening MFA requirements by AD group or client.
                    I'm comfortable setting up & configuring domains, Active Directory Federation Services (ADFS), and connecting SAML identity providers and services together.
                </div>
                <div class="skills-list">
                    Specific skills:
                    <ul>
                        <li>Active Directory - Design & maintenance</li>
                        <li>Active Directory Federation Services</li>
                        <li>Azure AD Connect</li>
                        <li>Azure MFA</li>
                        <li>SAML</li>
                        <li>NetScaler</li>
                    </ul>
                </div>
            </div>

            <div class="skills-box" v-if="skillsList.includes('data')">
                <div class="skills-header">
                    data
                </div>
                <div class="skills-about">
                    I've worked primarily with MS SQL Server and PowerBI, and have experience building ETL processes.
                    Some of my significant projects have been:
                    <ul>
                        <li>Creating reports in PowerBI to analyse our ticketing system data on a macro and individual level </li>
                        <li>Writing ETL scripts to extract data from 3CX phone system, and import into PowerBI for improved reporting</li>
                        <li>Writing ETL scripts to copy data from our ticketing system REST API and store it in a SQL database for easier reporting</li>
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

    </div>
</template>

<script>
import { store } from '../store/store.js'

export default {
    name: 'skills',
    computed: {
        skillsList() {
            var activeSkills = store.state.skillsArray.filter(x => x.active == true)
            return activeSkills.map(x => x.name)
        }
    }
}
</script>

<style>


.skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));    
    padding: 2em;
    color: rgb(230, 230, 230);
    font-size: 1.5em;

}

.skills-box {
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