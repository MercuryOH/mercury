using Microsoft.Extensions.Configuration;
using OpenTokSDK;
using System;

namespace Mercury.Services
{
    public class OpenTokService : IOpenTokService
    {
        private readonly OpenTok _openTok;

        public OpenTokService(IConfiguration config)
        {
            _openTok = new OpenTok(Convert.ToInt32(config["OpenTok:APIKey"]), config["OpenTok:APISecret"]);
        }

        public string CreateSession()
        {
            return _openTok.CreateSession().Id;
        }

        public string CreateSessionToken(string session)
        {
            return _openTok.GenerateToken(session);
        }
    }
}
