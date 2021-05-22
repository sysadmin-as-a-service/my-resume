<template>
    <div class="skills">
        <div class="skills-data" v-if="skillsList.includes('data')">
            <div class="skills-about">
                I've worked primarily with MS SQL Server and PowerBI, and have experience building ETL processes.
                Some of my significant projects have been:
                <li> Creating reports in PowerBI to analyse our ticketing system data on a macro and individual level </li>
                <li>Writing ETL scripts to copy data from our ticketing system REST API and store it in a SQL database for easier reporting</li>
                <li> Writing ETL scripts to sync our Trello task lists and store in a SQL database </li>
            </div>
            <div class="skills-list">
            Specific skills:
                <li> Microsoft SQL Server </li>
                <li> PowerBI </li>
                <li> Data transformation, ETL </li>
            </div>
            
        </div>
        <div class="skills-development" v-if="skillsList.includes('development')">
            <div class="skills-about">
                I enjoy building things! I've scripted lots of tasks in my career (see "automation" section), and have some experience developing web apps and other tools for internal use.              
                I've built a number of smaller projects using HTML, CSS and JavaScript (Vue.js), such as: 
                
                <li>a tool to visualise racks in a datacenter, linked to a custom asset database</li>
                <li>an addon for our ticketing system, to remind staff to add in billable time & set fields correctly</li>
                <li>a website for a makeup artist</li>
                <li>my own personal blog</li>
                <li>this resume</li>
                                
                I have also worked on ASP.NET Web Apps (ported a client reporting portal from ASP.NET to .NET Core), and built rating app for a homebrew competition, on ASP.NET Core & Razor Pages.
                I have become familiar with Git, and building simple CI/CD pipelines in a variety of build systems.

            </div>
            <div class="skills-list">
                Specific skills:
                <li>PowerShell scripting</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>Familiarity with C# and Python</li>
                <li>Git</li>
                <li>CI/CD - Azure DevOps, GitHub Actions, GitLab CI/CD</li>
            </div>
            

        </div>
        <div class="skills-euc" v-if="skillsList.includes('euc')">
            <div class="skills-about">
                I have designed, implemented and maintained End User Computing systems (primarily Citrix and RDS) for > 2,500 users.
                I've worked with Windows Server and related technologies for many years.
            </div>
            <div class="skills-list">
                Specific skills:
                <li>Citrix/RDS/Terminal Servers</li>
                <li>Application delivery - App-V, Published Apps</li>
                <li>Application troubleshooting - procmon, procexp, Wireshark, Fiddler
                <li>Group Policy</li>
                <li>Intune</li>
                <li>Windows File Server, DFS</li>
                <li>Identity management - Active Directory, ADFS</li>
            </div>
            
        </div>
        <div class="skills-leadership" v-if="skillsList.includes('leadership')">
            leadership stuff
            leading team
            goals
            process improvement

        </div>        
        <div class="skills-cloud" v-if="skillsList.includes('cloud')">
            cloud stuff
            hyper-v, vmm
            azure
            - iaas
            - SQL
            - web apps
            - apim
            - logic apps

            office 365
            exchange online
            hybrid

        </div>        
        <div class="skills-automation" v-if="skillsList.includes('automation')">
            <div class="skills-about">
                Working mostly on Windows servers and desktops, PowerShell is my go-to scripting language. 
                Some of the things I've scripted/automated are:

                    <li>Scripted the provisioning and weekly update of Citrix VMs in PowerShell</li>
                    <li>Built New Server request form that automatically submits change requests to relevant teams, in Salesforce</li>
                    <li>Used Zapier to collect email alerts from our monitoring system, parse the email and collate with information from a CMDB, then create/update tickets in a ticketing system</li>
                    <li>Created a series of Logic Apps and used Azure API Management, to create a simple REST API for a CMDB</li>
                    <li>Built a PowerShell module for working with a corporate timesheet tracking system<li>
                    <li>Created user provisioning scripts</li>
                    <li>Built Power Automate/Flows to automate daily tasks like creating tasks from emails or meeting notes</li>
            </div>
            <div class="skills-list">
                Specific skills:
                <li>Scripting languages - PowerShell, Python</li>
                <li>Low code tools - Zapier, Power Automate/Flow, Logic Apps, Salesforce Flow</li>
                <li>Working with REST APIs</li>
            </div>
   
        </div>
        <div class="skills-networking" v-if="skillsList.includes('networking')">
            <div class="skills-about">
                I've worked primarily with Citrix NetScalers for load balancing & GSLB setup, and WebMarshal proxies. 
                I can troubleshoot network related issues using tools like Fiddler, Wireshark, netstat, curl, and... ping.
            </div>
            <div class="skills-list">
                Specific skills:
                <li>Load balancers - Citrix NetScaler</li>
                <li>Web Proxies<li>
                <li>DNS - Windows DNS Server</li>
                <li>GSLB<li>

            </div>
        </div>               
    </div>
</template>

<script>
export default {
    name: 'skills',
    data() {
        return {
            skillsList: ['data','development','euc','leadership','scripting','cloud','automation','networking']
        }
    }
}
</script>

<style>

</style>