namespace Mercury.Services
{
    public interface IOpenTokService
    {
        string CreateSession();
        string CreateSessionToken(string session);
    }
}
